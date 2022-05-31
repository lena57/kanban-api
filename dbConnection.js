const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://lena_mas:Uspech1!@cluster0.4nyxyyp.mongodb.net/?retryWrites=true&w=majority';
const options = {};

function dbConnection(){
    mongoose.connect(connectionString, options)
}

module.exports = dbConnection;