const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const routes = require("./src/routes/parserrouter")
const PORT = process.env.PORT || 6000
app.use(cors())
app.use(bodyparser.json())
app.use(routes)


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})