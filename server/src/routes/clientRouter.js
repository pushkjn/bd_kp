const Router = require('express')
const router = new Router()

const clientController = require("../controlers/clientController");

router.get('/all', clientController.getAllClients)
router.get('/:id', clientController.getClientById)
router.post('/add', clientController.addClient)
router.delete('/delete/:id', clientController.deleteClient)
module.exports = router
