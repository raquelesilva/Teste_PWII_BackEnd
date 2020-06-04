// const dbConfig = require("../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
// var connection = mySql.createConnection(dbConfig)

function getHabitationType(callback) {
    connection
    const sql = "SELECT descritivo FROM tp2_tipoHabitacao"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection
}

function getHabitationTypeID(id, callback) {
    connection
    const sql = "SELECT descritivo FROM tp2_tipoHabitacao WHERE id_tipoHabitacao=? "
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection
}

module.exports = { 
    getHabitationType: getHabitationType,
    getHabitationTypeID: getHabitationTypeID
}