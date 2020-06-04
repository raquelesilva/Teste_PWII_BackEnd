const Router = require("express").Router
<<<<<<< HEAD
/* const multer = require("multer") */
=======
// const multer = require("multer")
>>>>>>> 1065b9ad35bd30d8397ab5ace9a0f39add4d7ddc
/* const middleware = require("../Middleware") */
var router = Router()

const controller = require("../controllers/carTypeController")

router.get("/carTypes", controller.getCarType)
router.get("/carTypes/:id", controller.getCarTypeID)

module.exports = router