const dbConfig = require("../database/dbConfig.json")
const mySql = require("mysql")
// var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
var connection = mySql.createConnection(dbConfig)

function getCarType(callback) {
    connection.start()
    const sql = "SELECT descritivo FROM tp2_tipoCarro"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

function getCarTypeID(id, callback) {
    connection.start()
    const sql = "SELECT descritivo FROM tp2_tipoCarro WHERE id_tipo=? "
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

module.exports = { 
    getCarType: getCarType,
    getCarTypeID: getCarTypeID
}