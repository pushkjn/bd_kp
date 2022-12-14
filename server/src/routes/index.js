const Router = require('express')
const router = new Router()
const carsRouter = require('./carsRouter')
const showroomsRouter = require('./showroomsRouter')
const clientRouter = require('./clientRouter')
const catalogRouter = require('./catalogRouter')
const purchasesRouter = require('./purchasesRouter')

router.use('/cars', carsRouter)
router.use('/showrooms', showroomsRouter)
router.use('/catalog', catalogRouter)
router.use('/client', clientRouter)
router.use('/purchases', purchasesRouter)

module.exports = router