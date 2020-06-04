const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config.json")
const userRouter = require("./routes/userRouter")
const carTypeRouter = require("./routes/carTypeRouter")
const securityTypeRouter = require("./routes/securityTypeRouter")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(userRouter)
app.use(securityTypeRouter)
app.use(carTypeRouter)
app.listen(config.port, () => {
    console.log(config.message);
});