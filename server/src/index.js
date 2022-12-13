const { Client } = require('pg')
const config = require('../config')
const express = require('express')

const startApp = (dbClient) => {
    const app = express()

    app.get('/cars', (req, res) => {
        dbClient.query('select * from cars', (dberr, dbres) => {
            if (dberr) {
                res.sendStatus(404)
            }

            else {
                const cars = JSON.stringify(dbres)
                res.json(cars)
            }
        })
    })

    app.listen(3000, () => console.log('started server'))
}

const main = async () => {

    const client = new Client(config)
    client.connect((err) => {
        if (err) {
            console.error('connection error', err.stack)
        } else {

            startApp(client)
            
        }
    })
}

main()


