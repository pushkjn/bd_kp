const Router = require('express')
const router = new Router()

const catalogController = require("../controlers/catalogController");

router.get('/all', catalogController.getAllCatalogs)
router.get('/:id', catalogController.getCatalogById)
router.post('/add', catalogController.addCatalog)
router.delete('/delete/:id', catalogController.deleteCatalog)
module.exports = router
