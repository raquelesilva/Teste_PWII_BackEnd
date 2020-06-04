const Router = require("express").Router
/* const multer = require("multer") */
/* const middleware = require("../Middleware") */
var router = Router()

const controller = require("../controllers/habitationTypeController")

router.get("/habitationTypes", controller.getHabitationType)
router.get("/habitationTypes/:id", controller.getHabitationTypeID)

module.exports = router