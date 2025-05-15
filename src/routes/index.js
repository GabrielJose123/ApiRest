const { Router } = require('express')

const UserController = require('../controllers/UserController')

const routes = Router()

routes.get('/', (req,res) => {
    res.send("ola amukndo")
})

routes.post('/users', UserController.createUser)
routes.get('/users')

routes.get('/users:user_id')

routes.post('/login')

routes.post('/products/:user_id')
routes.get('/products/:user_id')
routes.delete('/products/:user_id/:product_id')
routes.patch('/products/:users_id/:product_id')

routes.get('/products')
routes.get('/products/:products:id')

routes.post('/cart/:user_id')
routes.get('cart/:user_id')

routes.get('/cart/:user:id/:cart_id')

module.exports = routes

