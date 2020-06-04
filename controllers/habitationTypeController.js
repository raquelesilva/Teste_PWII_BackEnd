const habitationTypeFunctions = require("./habitationTypeFunctions")

function getHabitationType(req, result) {
    habitationTypeFunctions.getHabitationType(description,id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getHabitationTypeID(req, result) {
     let id = req.params.id

     habitationTypeFunctions.getHabitationTypeID(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = {
    getHabitationType: getHabitationType,
    getHabitationTypeID: getHabitationTypeID 
}