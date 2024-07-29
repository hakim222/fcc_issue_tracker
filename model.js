const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    "project_id": {
        required: true,
        type: String
    },
    "issue_title": {
        required: true,
        type: String
    },
    "issue_text": {
        required: true,
        type: String
    },
    "created_on": {
        type: Date,
        default: Date.now
    },
    "updated_on": {
        type: Date,
        default: Date.now
    },
    "created_by": {
        required: true,
        type: String
    },
    "assigned_to": {
        type: String,
        default: ""
    },
    "open": {
        type: Boolean,
        default: true
    },
    "status_text": {
        type: String,
        default: ""
    }
})

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Issue = mongoose.model('Issue', issueSchema);
const Project = mongoose.model('Project', projectSchema);
module.exports = { Issue, Project}