const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
var mongo = require('mongodb');
const { readdirSync } = require("fs");

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '2mb' }))
app.use(cors())


const authRoutes = require('./routes/auth')

app.use('/api', authRoutes)


// app.get('/', (req, res) => {
//     res.send('hello')
// })
// app.get('/api', (req, res) => {
//     res.send({ data: 'hello' })
// })



mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true

}).then(() => console.log('DB connected'))
    .catch(er => console.log(er))

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));