const carInsuranceFunctions = require("./carInsuranceFunctions")

function addCarInsurance(req, result){
    let plate = req.body.plate
    let plate_date = req.body.plate_date
    let id_carType = req.body.id_carType
    let brand = req.body.brand
    let id_user = req.body.id_user
   

    carInsuranceFunctions.addCarInsurance(plate, plate_date, id_carType, brand, id_user,(error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = { 
    addCarInsurance: addCarInsurance,
    // removeReservations: removeReservations,
    // getReservations: getReservations,
    // getReservationsId: getReservationsId
}