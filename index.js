let express = require('express')
let app = express() 
let cors = require('cors')
const user = require('./User')
const review = require('./Review')
const present = require('./Present')
const question = require('./Question')

app.use(cors())
app.use(express.json())

let startConcurs = false
let finishConcurs = false
let visit = 0

app.post('/api/register_user', (req, res) => {
    let createdUser = user.addUser(req.body) 
        
    if (createdUser === 'Такой пароль уже использовался!')
        res.json({type: 'error', text: 'Такой пароль уже использовался!'})    

    else if (createdUser === 'Такой человек уже есть в системе!')
        res.json({type: 'error', text: 'Такой человек уже есть в системе!'})

    else 
        res.json(createdUser)
         
})

app.get('/api/login_user', (req, res) => {
    res.json(user.getUser(req.query.password))
})

app.get('/api/get_score', (req, res) => {
    if (req.query.admin) {
        res.json({data: user.getAllUser(), count: user.getAllUser().length})
    }
    else {
        res.json({data: user.getAllUser(), count: user.getAllUser().length})
    }
})

app.post('/api/add_review', (req, res) => {
    review.addReview(req.body)
    res.json(req.body)
})

app.get('/api/get_review', (req, res) => {
    res.json(review.getAll())
})

app.get('/api/check_admin', (req, res) => {
    res.json(user.checkAdmin())
})

app.put('/api/change_password', (req, res) => {
    let flag = user.changePassword(req.body)
    flag ? res.json('ok') : res.json('error')
})

app.put('/api/change_is_show', (req, res) => {
    res.json(user.changeIsShow(req.body))
})

app.put('/api/add_clicker', (req, res) => {
    res.json(user.addClicker(req.body))
})

app.get('/api/get_position', (req, res) => {
    res.json(user.getPosition(req.query.password))
})

app.put('/api/change_login', (req, res) => {
    res.json(user.changeLogin(req.body))
})

app.get('/api/get_winner', (req, res) => {
    if (finishConcurs) {
        res.json(user.getWinners())
    }
    else {
        res.json('error')
    }
})

app.get('/api/get_info_user', (req, res) => {
    res.json(user.getInfoUser(req.query.name))
})

app.post('/api/add_present', (req, res) => {
    let username = user.getUserByPassword(req.body.password)
    res.json(present.addPresent({name: username, text: req.body.text}))
})

app.get('/api/get_all_present', (req, res) => {
    res.json(present.getAllPresent())
})

app.get('/api/get_present', (req, res) => {
    res.json(present.getPresent(req.query.name))
})

app.get('/api/check_present', (req, res) => {
    let username = user.getUserByPassword(req.query.password)
    res.json(present.checkPresent(username))
})

app.get('/api/delete_present', (req, res) => {
    let username = user.getUserByPassword(req.query.password)
    res.json(present.deletePresent(username))
})

app.get('/api/get_question', (req, res) => {
    res.json(question[req.query.subject.replace('_', ' ')])
})

app.put('/api/add_victory', (req, res) => {
    res.json(user.addVictory(req.body))
})

app.put('/api/check_victory_answer', (req, res) => {
    res.json(user.checkVictory(req.body))
})

app.get('/api/download', (req, res) => {
    const file = `${__dirname}/certificates/${req.query.name}.jpg`;
    res.download(file);
})

app.get('/api/check_password', (req, res) => {
    res.json(user.checkUserByPassword(req.query.password, req.query.name))
})

app.get('/api/check_leave_review', (req, res) => {
    res.json(review.checkLeave(req.query.name))
})



app.get('/api/get_start_state', (req, res) => {
    res.json({start: startConcurs, finish: finishConcurs})
})

app.put('/api/change_start_state', (req, res) => {
    startConcurs = true
    res.json(startConcurs)
})

app.put('/api/change_finish_state', (req, res) => {
    finishConcurs = true
    res.json(finishConcurs)
})


app.put('/api/fortuna_unavailable', (req, res) => {
    res.json(user.fortuneUnavailable(req.body))
})

app.get('/api/fortuna_get', (req, res) => {
    res.json(user.getFortune(req.query.password))
})

app.put('/api/fortuna_available', (req, res) => {
    res.json(user.fortuneAvailable())
})






app.put('/api/update_visit', (req, res) => {
    visit++
    res.json()
})

app.get('/api/get_visit', (req, res) => {
    res.json(visit)
})























app.listen(5000, () => {
    console.log('Working...');
})