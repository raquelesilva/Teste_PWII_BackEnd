const Router = require("express").Router
const middleware = require("../Middleware")
var router = Router()

const controller = require("../controllers/userController")

router.post("/register", controller.addUser)
router.post("/login",controller.login)
router.post("/logout", middleware.verifyToken, controller.logout)
module.exports = router
