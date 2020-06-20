const express = require("express")
const server = express()

// pegar banco de dados

// Configurar pasta publica
server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    return res.render("login.html", { title: "Um titulo"})

})

server.get("/register", (req, res) => {

    // req.query: 
    req.query
    return res.render("register.html",)

})

server.post("/savepoint", (req, res) => {

    return res.render("register.html", { saved: true})
    })

server.get("/home", (req, res) => {
    return res.render("home.html" )


        })

        server.get("/home-menu", (req, res) => {
            return res.render("home-menu.html" )
        })
    
// ligar o servidor
server.listen(3000)