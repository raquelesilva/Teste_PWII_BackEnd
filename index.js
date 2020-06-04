const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config.json")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(config.port, () => {
    console.log(config.message);
});