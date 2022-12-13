const { Client } = require('pg')

const main = async () => {
    const config = {
        user: 'postgres',
        password: 'admin',
        host: 'localhost',
        database: 'kp',
        port: 5432
    }
    const client = new Client(config)
    client.connect((err) => {
        if (err) {
            console.error('connection error', err.stack)
        } else {
            client.query("SELECT model FROM cars where brand = 'Dodge'", (err, res) => {
                if (err) 
                    console.log(err)

                else
                    console.log(res)
            })
        }
    })
}

main()


