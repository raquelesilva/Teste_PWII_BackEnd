const habitaionInsurenceFunctions = require("./habitationInsuranceFunctions")

function addHabitaionInsurences(req, result){
    let id_tipo_seguro = req.body.id_tipo_seguro
    let telefone = req.body.telefone
    let nif = req.body.nif
    let morada = req.body.morada
    let id_tipo_habitacao = req.body.id_tipo_habitacao
    let id_user = req.body.id_user

    habitaionInsurenceFunctions.addHabitaionInsurences(id_tipo_seguro, telefone, nif, morada, id_tipo_habitacao, id_user, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function removeHabitaionInsurences(req, result) {
    let id = req.params.id

    habitaionInsurenceFunctions.removeHabitaionInsurences(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getHabitaionInsurences(req, result) {
    let id = req.params.id

    habitaionInsurenceFunctions.getHabitaionInsurences(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getHabitaionInsurencesId(req, result) {
    let id = req.params.id

    habitaionInsurenceFunctions.getHabitaionInsurencesId(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = { 
    addHabitaionInsurences: addHabitaionInsurences,
    removeHabitaionInsurences: removeHabitaionInsurences,
    getHabitaionInsurences: getHabitaionInsurences,
    getHabitaionInsurencesId: getHabitaionInsurencesId
}