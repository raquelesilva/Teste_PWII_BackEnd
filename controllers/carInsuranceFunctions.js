const mySql = require("mysql")
var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })


function addCarInsurance(plate, plate_date, id_carType, brand, id_user, callback) {
    connection

    const sql = "INSERT INTO tp2_seguro_carro (matricula, data_matricula,id_tipoCarro, marca, id_utilizador) VALUES (?,?,?,?,?)"
    connection.query(sql, [plate, plate_date, id_carType, brand, id_user], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Reserva Adicionada" })
    })

    connection
}

function removeCarInsurance(id, callback) {
    connection

    const sql = "DELETE FROM tp2_seguro_carro WHERE id = ?"
    connection.query(sql, [id], function (error, results) {
        if (error) callback(error)
        callback(null, { sucess: true, message: "Removida" })
    })

    connection
}


module.exports = {
    addCarInsurance: addCarInsurance,
    removeCarInsurance: removeCarInsurance
}