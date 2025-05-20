const { Router } = require('express')

const UserController = require('../controllers/UserController')

const routes = Router()

routes.get('/', (req, res) => {
    res.send("ola amukndo")
})

// Usuários
routes.post('/users', UserController.createUser)
routes.get('/users', (req, res) => {
    res.send("Listar usuários")
})
routes.get('/users/:user_id', (req, res) => {
    res.send(`Detalhes do usuário ${req.params.user_id}`)
})

// Login
routes.post('/login', (req, res) => {
    res.send("Login de usuário")
})

// Produtos
routes.post('/products/:user_id', (req, res) => {
    res.send(`Adicionar produto para o usuário ${req.params.user_id}`)
})
routes.get('/products/:user_id', (req, res) => {
    res.send(`Listar produtos do usuário ${req.params.user_id}`)
})
routes.delete('/products/:user_id/:product_id', (req, res) => {
    res.send(`Deletar produto ${req.params.product_id} do usuário ${req.params.user_id}`)
})
routes.patch('/products/:user_id/:product_id', (req, res) => {
    res.send(`Atualizar produto ${req.params.product_id} do usuário ${req.params.user_id}`)
})
routes.get('/products', (req, res) => {
    res.send("Listar todos os produtos")
})
routes.get('/products/:product_id', (req, res) => {
    res.send(`Detalhes do produto ${req.params.product_id}`)
})

// Carrinho
routes.post('/cart/:user_id', (req, res) => {
    res.send(`Adicionar ao carrinho do usuário ${req.params.user_id}`)
})
routes.get('/cart/:user_id', (req, res) => {
    res.send(`Ver carrinho do usuário ${req.params.user_id}`)
})
routes.get('/cart/:user_id/:cart_id', (req, res) => {
    res.send(`Ver item ${req.params.cart_id} no carrinho do usuário ${req.params.user_id}`)
})

module.exports = routes
