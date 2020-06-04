const userFunctions = require("./userFunctions")
const bcrypt = require("bcrypt")

// Utiliza as funções dos users criadas e trata dos seus erros
function addUser(req, result) {
    let name = req.body.name
    let pass = req.body.pass
    let email = req.body.email
    bcrypt.hash(pass, 10, function (error, hash) {
        userFunctions.addUser(name, hash, email, (error, sucess) => {
            if (error) {
                throw error
                return
            }
            result.json(sucess)
        })
    })
}
function login(req, result) {
    let pass = req.body.pass
    let email = req.body.email

    userFunctions.login(pass, email, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function logout(req, result) {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
    }
    userFunctions.logout(token, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
module.exports = { addUser: addUser, login:login, logout: logout }