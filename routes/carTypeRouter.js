const Router = require("express").Router
/* const multer = require("multer") */
/* const middleware = require("../Middleware") */
var router = Router()

const controller = require("../controllers/carTypeController")

router.get("/carTypes", controller.getCarType)
router.get("/carTypes/:id", controller.getCarTypeID)

module.exports = router