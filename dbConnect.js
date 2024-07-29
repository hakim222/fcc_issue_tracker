require('dotenv').config;
const mongoose = require('mongoose');

const dbConnect = async ()=>{
    mongoose.connect(
        process.env.MONGO_URI,
        {
        }
    )
    .then(()=>{
        console.log("Succesfully connected to database!");
    })
    .catch((error)=>{
        console.log("Unable to connect with the database!")
        console.error(error);
    })
}

module.exports = dbConnect;