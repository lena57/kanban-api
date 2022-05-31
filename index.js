const express = require('express'); // the same as import express from 'express' (when babel installed)

const routes = require("./routes");
const bodyParser = require("./bodyParser");

const app = express();
const PORT = process.env.PORT || 5000

bodyParser(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})