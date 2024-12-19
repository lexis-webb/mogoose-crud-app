const mongoose = require('mongoose')

const conn = async () => {
    // connect to database await mongoose.connect(process.env.MONGO_URI)
    try{
        mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.once('open', () => {
            console.log("conected to mongodb");
        });
    }   catch (error) {
        console.log ("not connected to mongodb")
    }
};

module.exports = conn;