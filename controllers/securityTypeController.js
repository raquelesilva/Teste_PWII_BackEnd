//Utilizar function criada para tratar os possiveis erros
 
const SecurityTypeFunctions = require("./SecurityTypeFunctions")

function getSecurityType(req, result) {
    SecurityTypeFunctions.getSecurityType(description,id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getSecurityTypeID(req, result) {
     let id = req.params.id
     SecurityTypeFunctions.getSecurityTypeID(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = {
    getSecurityType:getSecurityType,
    getSecurityTypeID:getSecurityTypeID 
}