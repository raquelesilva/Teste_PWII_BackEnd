const Router = require("express").Router
/* const middleware = require("../Middleware") */
var router = Router()
 
const controller = require("../controllers/habitationInsuranceController")
router.post("/habitationInsurences", controller.addHabitaionInsurences)
router.delete("/habitationInsurences/:id", controller.removeHabitaionInsurences)
router.get("/habitationInsurences", controller.getHabitaionInsurences)

module.exports = router