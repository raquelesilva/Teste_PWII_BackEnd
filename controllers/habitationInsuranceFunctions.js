const dbConfig = require("../database/dbConfig.json")
const mySql = require("mysql")
// var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
var connection = mySql.createConnection(dbConfig)


function addHabitaionInsurences(id_tipo_seguro, telefone, nif, morada, id_tipo_habitacao, id_user, callback) {
    connection.connect()

    const sql = "INSERT INTO tp2_seguroHabitacao (id_tipo_seguro, telefone, nif, morada, id_tipo_habitacao, id_user) VALUES (?,?,?,?,?,?)"
    connection.query(sql, [id_tipo_seguro, telefone, nif, morada, id_tipo_habitacao, id_user], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Adicionada" })
    })

    connection.end() 
}

function removeHabitaionInsurences(id, callback) {
    connection.connect() 

    const sql = "DELETE FROM tp2_seguroHabitacao WHERE id = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Removida" })
    })

    connection.end()
}

function getHabitaionInsurences(id, callback) {
    connection.connect() 
    const sql = "SELECT id_tipo_seguro, telefone, nif, morada, id_tipo_habitacao, id_user from tp2_seguroHabitacao"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end() 
}

module.exports = {
    addHabitaionInsurences: addHabitaionInsurences,
    removeHabitaionInsurences: removeHabitaionInsurences,
    getHabitaionInsurences: getHabitaionInsurences
}