const Router = require('express')
const router = new Router()

const purchasesController = require('../controlers/purchasesController')

router.get('/all', purchasesController.getAllPurchases)
router.get('/:id', purchasesController.getPurchaseById)
router.post('/add', purchasesController.addPurchase)
router.delete('/delete/:id', purchasesController.deletePurchases)
module.exports = router