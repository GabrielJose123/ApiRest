const { Router } = require('express')

const routes = Router()

routes.get('/', (req,res) => {
    res.send("ola amukndo")
})

routes.post('/users')
routes.get('/users')

routes.get('/users:user_id')

routes.post('/login')

routes.post('/products/:user_id')
routes.get('/products/:user_id')
routes.get('/products/:products:id')

routes.delete('/products/:user_id/:product_id')

module.exports = routes