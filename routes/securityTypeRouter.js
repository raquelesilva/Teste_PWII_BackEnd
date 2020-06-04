const Router = require("express").Router
const multer = require("multer")
const middleware = require("../Middleware")
var router = Router()

const controller = require("../controllers/securityTypeController")

router.get("/securityTypes", middleware.verifyToken, controller.getSecurityType)
router.get("/securityTypes/:id", middleware.verifyToken, controller.getSecurityTypeID)

module.exports = router