const Router = require('express')
const router = new Router()

const showroomsController = require("../controlers/showroomsController");

router.get('/all', showroomsController.getAllShowrooms)
router.get('/:id', showroomsController.getShowroomById)
router.post('/add', showroomsController.addShowroom)
router.delete('/delete/:id', showroomsController.deleteShowroom)
module.exports = router
