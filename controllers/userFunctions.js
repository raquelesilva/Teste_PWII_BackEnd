const jsonwebtoken = require('jsonwebtoken')
const config = require("../../config.json")
const bcrypt = require("bcrypt")
const mySql = require("mysql")
const dbConfig = require("../../database/dbConfig.json")
var connection = mySql.createConnection(dbConfig)
//HEROKU
// var connection = mySql.createConnection({ host: process.env.host, user: process.env.user, password: process.env.password, database: process.env.database })

//login com email e password
function login(pass, email, callback) {
    connection.connect()

    const sql = "SELECT email,password FROM tp2_users WHERE email=?"
    connection.query(sql, [email], function (error, rows, fields) {
        if (!error) {
            //compara a password inserida com a password retornada pelo email 
            bcrypt.compare(pass, rows[0].password, function (error, results) {
                if (error) {
                    callback(error)
                }
                if (results) {
                    //Se nao der err, ele cria um token que expira passado 2hrs
                    let token = jsonwebtoken.sign({ email: email }, config.secret, { expiresIn: '2h' })
                    callback(null, { sucess: true, message: "Sessão iniciada", token: token })
                }
            })
        }
        else {
            callback(error)
        }
    })
    connection.end()
}

module.exports = { addUser: addUser, login: login, logout: logout }