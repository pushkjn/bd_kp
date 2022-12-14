const Router = require('express')
const router = new Router()

const carsController = require('../controlers/carsController')

router.get('/all', carsController.getAllCars)
router.get('/:id', carsController.getCarById)
router.post('/add', carsController.addCar)
router.delete('/delete/:id', carsController.deleteCar)
module.exports = router