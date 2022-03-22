const mongoose = require('mongoose');


const connectDB = async (url) => {
    await mongoose.connect(url);
    console.log('connection successful');
}

module.exports = connectDB;