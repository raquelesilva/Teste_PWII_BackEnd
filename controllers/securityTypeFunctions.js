/* const dbConfig = require("../../../database/dbConfig.json") */
const mySql = require("mysql")
// var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
var connection = mySql.createConnection(dbConfig)

//retorna dados da tabela decoracao da base de dados
function getSecurityType(callback) {
    connection 
    const sql = "SELECT descritivo FROM decoracao"
    connection.query(sql, function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection 
}

//retorna dados da tabela de uma certa decoracao decoracao da base de dados
function getSecurityTypeID(id, callback) {
    connection 
    const sql = "SELECT descritivo FROM decoracao WHERE id_decoracao=? "
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: results })
    })
    connection 
}

module.exports = { 
    getSecurityType:getSecurityType,
    getSecurityTypeID:getSecurityTypeID
}