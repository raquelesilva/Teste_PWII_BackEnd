const carTypeFunctions = require("./carTypeFunctions")

function getCarType(req, result) {
    carTypeFunctions.getCarType((error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getCarTypeID(req, result) {
     let id = req.params.id

     carTypeFunctions.getCarTypeID(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = {
    getCarType: getCarType,
    getCarTypeID: getCarTypeID 
}