const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardGetAll = require("./card/cardGetAll");
const cardUpdateById = require("./card/cardUpdateById");

function routes(app) {

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.get('/cards', cardGetAll)
    app.delete('/cards/:cardId', cardDelete)
    app.post('/cards', cardCreate)
    app.patch('/cards/:cardId', cardUpdateById)
}

module.exports = routes;