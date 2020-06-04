const Router = require("express").Router
/* const multer = require("multer") */
/* const middleware = require("../Middleware") */
var router = Router()

const controller = require("../controllers/securityTypeController")

router.get("/securityTypes", controller.getSecurityType)
router.get("/securityTypes/:id", controller.getSecurityTypeID)

module.exports = router