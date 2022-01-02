let express = require('express')
let app = express() 
let cors = require('cors')
const user = require('./Controller/User')
const review = require('./Controller/Review')
const present = require('./Controller/Present')
const question = require('./Controller/Question')
let bodyParser = require('body-parser')

const userRoutes = require('./Routes/userRoutes')
const presentRouter = require('./Routes/presentRoutes')
const reviewRoutes = require('./Routes/reviewRoutes')
const connection = require('./db')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', presentRouter)
app.use('/api', reviewRoutes)



app.get('/api/get_question', (req, res) => {
    res.json(question[req.query.subject.replace('_', ' ')])
})


app.get('/api/download', (req, res) => {
    let file;

    if (req.query.name == 'Эмин Х' || req.query.name === 'Эмин Г')
        file = `${__dirname}/certificates/Эмин.jpg`;
    else
        file = `${__dirname}/certificates/${req.query.name}.jpg`;

    res.download(file);
})

app.get('/api/get_start_state', (req, res) => {
    connection.query('SELECT * FROM konkurs WHERE id = 1', (error, rows, fields) => {
        res.json({start: rows[0].startConcurs, finish: rows[0].finishConcurs})
    })
})

app.put('/api/change_start_state', (req, res) => {
    connection.query('UPDATE konkurs SET startConcurs = 1 WHERE id = 1', (error, rows, fields) => {
        res.json(0)
    })
})

app.put('/api/change_finish_state', (req, res) => {
    connection.query('UPDATE konkurs SET finishConcurs = 1 WHERE id = 1', (error, rows, fields) => {
        res.json(1)
    }) 
})


app.get('/', (req, res) => {
    connection.query('SELECT * FROM user', (error, rows, fields) => {
        console.log(rows);
        res.json(rows)
    }) 
})



// app.get('/api/fortuna_get', (req, res) => {
//     res.json(user.getFortune(req.query.password))
// })

app.get('/', (req, res) => {
    res.end('<h1>Работает...</h1>')
})





















let PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Working...');
})