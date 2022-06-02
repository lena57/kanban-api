const express = require('express'); // the same as import express from 'express' (when babel installed)
const axios = require('axios');

const routes = require("./routes");
const bodyParser = require("./bodyParser");
const dbConnection = require("./dbConnection");

const app = express();
const PORT = process.env.PORT || 5000;

dbConnection();
bodyParser(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})

console.log('START')
result = axios({
    method: 'GET',
    url: 'https://express-demo-lena.herokuapp.com',   //'https://lena-kanban.herokuapp.com/cards',
    data: {
        name: 'Masha',
        id: '34'
    }
})
    .then(res => console.log(res.data))
    .catch(err => 'ERROR ' + err);
console.log('end')