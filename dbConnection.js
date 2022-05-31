const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://lena_mas:Uspech1!@cluster0.4nyxyyp.mongodb.net/?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

function dbConnection() {
    mongoose.connect(connectionString, options)
        .then(() => console.log('Mongo connection OK'))
        .catch(err => console.log(err))
}

module.exports = dbConnection;