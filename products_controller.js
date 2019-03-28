module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
        let {name, description, price, image_url} = req.body
        
        db.create_product([name, description, price, image_url])
        .then(() => {
            res.status(200).send('User created')
        .catch(err => {
            res.status(500).send("there was an error", console.log(err))
            })
        })
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.read_product(id)
        .then((product) => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send("there was an error", console.log(err))
            })
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db')
        db.read_products()
        .then((product) => {
            res.status(200).send(product)
        .catch(err => {
            res.status(500).send("there was an error", console.log(err))
            })
        })
    },
    update: (req, res, next) => {
        const db = req.app.get('db')
        const { params, query } = req

        db.update_product([ params.id, query.desc])
        .then(() => {
            res.status(200).send('user updated')
        .catch(err => {
            res.status(500).send("there was an error", console.log(err))
            })
        })
    },
    delete: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
        .then(() => {
            res.status(200).send('product deleted')
        .catch(err => {
            res.status(500).send("there was an error", console.log(err))
            })
        })
    },
}