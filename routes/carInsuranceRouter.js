const Router = require("express").Router

var router = Router()
 
const controller = require("../controllers/carInsuranceController")
router.post("/CarSimulation", controller.addCarInsurance)
module.exports = router