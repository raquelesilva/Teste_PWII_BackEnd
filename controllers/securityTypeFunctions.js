const dbConfig = require("../database/dbConfig.json")
const mySql = require("mysql")
// var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
var connection = mySql.createConnection(dbConfig)

function getSecurityType(callback) {
    connection.start()
    const sql = "SELECT descritivo FROM tp2_tipo_seguro"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

function getSecurityTypeID(id, callback) {
    connection.start()
    const sql = "SELECT descritivo FROM tp2_tipo_seguro WHERE id_tipo_seguro=? "
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection.end()
}

module.exports = { 
    getSecurityType:getSecurityType,
    getSecurityTypeID:getSecurityTypeID
}