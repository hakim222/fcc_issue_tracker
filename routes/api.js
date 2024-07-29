'use strict';
const { query } = require('express');
const {Issue, Project} = require('../model')

module.exports = function (app) {

  app.route('/api/issues/:project')
  
    .get( async function (req, res){
      let project = req.params.project;
      let filter = req.query;
      try {
        const queried_project = await Project.findOne({"name": project})
        let filtered_issues = await Issue.find({project_id: queried_project._id})

        if (Object.keys(filter).length > 0) {
          filtered_issues = filtered_issues.filter(issue => {
                return Object.keys(filter).every(key => {
                    if (key === 'open') {
                        // Handle boolean fields
                        return issue[key] === (filter[key] === 'true');
                    }

                    // Handle other fields as strings or numbers
                    return issue[key] && issue[key].toString().toLowerCase() === filter[key].toLowerCase();
                });
            });
        }

        res.json(filtered_issues);
        
      }
      catch(err){
        res.status(500).json({message: err.message})
      }
    })
    
    .post( async function (req, res){
      let project = req.params.project;
      let title = req.body.issue_title;
      let text = req.body.issue_text;
      let created_by = req.body.created_by;
      let assigned_to = req.body.assigned_to;
      let status_text = req.body.status_text;
      let createdIssue = new Issue();
      try {
        let queried_project = await Project.findOne({"name": project});

        if (!queried_project){
          queried_project = new Project({
            "name": project,
          })
          let res = await queried_project.save();
          createdIssue = new Issue({
            "project_id": res._id,
            "issue_title": title,
            "issue_text": text,
            "created_by": created_by,
            "assigned_to": assigned_to,
            "status_text": status_text
          });
        }
        else {
          createdIssue = new Issue({
            "project_id": queried_project._id,
            "issue_title": title,
            "issue_text": text,
            "created_by": created_by,
            "assigned_to": assigned_to,
            "status_text": status_text
          });
        }

        await createdIssue.save();

        res.json(createdIssue)
      }
      catch(err){
        if (err.name === "ValidationError"){
          res.json({ error: 'required field(s) missing' })
        }
        else {
          res.json({error: err.toString()})
        }
      }
    })
    
    .put(async function (req, res){
      const { project } = req.params;
      const { _id, ...updates } = req.body;

      // Check for missing _id
      if (!_id) {
        return res.json({ error: 'missing _id' });
      }

      // Check for no update fields
      if (Object.keys(updates).length === 0) {
        return res.json({ error: 'no update field(s) sent', _id });
      }

      try {
        // Find the project
        const projectDoc = await Project.findOne({ "name": project });
        if (!projectDoc) {
          return res.json({ error: 'could not update', _id });
        }
        // Find the issue in the issues array
        const query_issue = await Issue.findById(_id);
        if (!query_issue) {
          return res.json({ error: 'could not update', _id });
        }
        // Update the issue with the fields from req.body
        Object.keys(updates).forEach(key => {
          if (key in query_issue) {
            if (key=="created_by"&&updates[key]==""){
            }
            else query_issue[key] = updates[key];
          }
        });
        // Set the updated_on field to the current date
        query_issue.updated_on = Date.now();
        // Save the changes
        await query_issue.save();
        // Return success response
        res.json({ result: 'successfully updated', _id });
      } 
      catch (err) {
        console.error(err);
        res.json({ error: 'could not update', _id });
      }
    })
    
    .delete(async function (req, res){
      const { project } = req.params;
      const { _id } = req.body;

      // Check for missing _id
      if (!_id) {
        return res.json({ error: 'missing _id' });
      }

      try {
        // Find the project
        const projectDoc = await Project.findOne({ "name": project });
        if (!projectDoc) {
          return res.json({ error: 'could not delete', _id });
        }

        // Find the issue in the issues array
        const result = await Issue.deleteOne({"_id": _id, "project_id": projectDoc._id});
        if (result.deletedCount==0) return res.json({error: 'could not delete', '_id': _id})
        // Return success response
        res.json({ result: 'successfully deleted', _id });
      } 
      catch (err) {
        console.error(err);
        res.json({ error: 'could not delete', _id });
      }
    });
};
