const dbConfig = require("../database/dbConfig.json")
const mySql = require("mysql")
// var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })
var connection = mySql.createConnection(dbConfig)


function addCarInsurance(plate, plate_date, id_carType, brand, id_user, callback) {
    connection

    const sql = "INSERT INTO tp2_seguro_carro (matricula, data_matricula,id_tipoCarro, marca, id_utilizador) VALUES (?,?,?,?,?)"
    connection.query(sql, [plate, plate_date, id_carType, brand, id_user], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Reserva Adicionada" })
    })

    connection
}


module.exports = {
    addCarInsurance: addCarInsurance
}