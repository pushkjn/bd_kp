const { Cars } = require('../models/cars')
const ApiError = require('../error/ApiError');

class CarsController {
    async getAllCars(req, res) {
        const cars = await Cars.findAll()
        return res.json(cars)
    }

    async getCarById(req, res) {
        const {id} = req.params
        const car = await Cars.findOne({where: {id}})
        return res.json(car)
    }

    async addCar(req, res, next) {
        try {
            let {brand, model, assembly, body_style, power, acceleration} = req.body
            const car = await Cars.create({brand, model, assembly, body_style, power, acceleration})
            return res.json(car)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteCar(req, res, next) {
        try {
            const {id} = req.params
            await Cars.destroy({
                where: {id}
            })
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new CarsController()