let express = require('express')
let app = express()
let cors = require('cors')
let question = require('./Controller/Question')
let bodyParser = require('body-parser')
const { v1 } = require('uuid')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())



user = [
    {
        id: v1(),
        name: 'req.body.person',
        login: 'req.body.login',
        password: '123',
        isAdmin: true,
        isShowName: false,
        ball: 0,
        present: [],
        review: [],
        clicker: [],
        victory: [],
    },
    {
        id: v1(),
        name: 'Руслан',
        login: 'req.body.login',
        password: '1',
        isAdmin: false,
        isShowName: false,
        ball: 230,
        present: [],
        review: [],
        clicker: [],
        victory: [],
    },
    {
        id: v1(),
        name: 'Эмин Х',
        login: 'req.',
        password: '2',
        isAdmin: false,
        isShowName: false,
        ball: 40,
        present: [],
        review: [],
        clicker: [],
        victory: [],
    },
    {
        id: v1(),
        name: 'Самир',
        login: 'req.body.',
        password: '3',
        isAdmin: false,
        isShowName: false,
        ball: 20,
        present: [],
        review: [],
        clicker: [],
        victory: [],
    },
    {
        id: v1(),
        name: 'Ильгар',
        login: 'Ильгар',
        password: '4',
        isAdmin: false,
        isShowName: false,
        ball: 0,
        present: [],
        review: [],
        clicker: [],
        victory: [],
    },
    {
        id: v1(),
        name: 'Саид',
        login: 'req.body32.',
        password: '5',
        isAdmin: false,
        isShowName: false,
        ball: 10,
        present: [],
        review: [],
        clicker: [],
        victory: [],
    },
]

present = [
    {
        id: 1,
        title: 'Контры на телефон (5 AZN)',
        picture: 'contri.png',
        isAvailable: true
    },
    {
        id: 2,
        title: 'Сделаю за вас 2 самостоятельные (доклад + презентация).',
        picture: 'twoWork.png',
        isAvailable: true
    },
    {
        id: 3,
        title: 'Плитка хорошего шоколад.',
        picture: 'chocolate.svg',
        isAvailable: true
    },
    {
        id: 4,
        title: 'В течение дня буду брать вам все, что вы выберете в столовой.',
        picture: 'bufet.svg',
        isAvailable: true
    },
    {
        id: 5,
        title: 'Сделаю за вас 1 самостоятельную и плюс плитка шоколада.',
        picture: 'workChocolate.svg',
        isAvailable: true
    },
    {
        id: 6,
        title: 'Чипсы, сухарики, кола и т.п.',
        picture: 'fastFood.png',
        isAvailable: true
    },
    {
        id: 7,
        title: 'Нормальный блокнот/тетрадь',
        picture: 'copybook.svg',
        isAvailable: true
    },
    {
        id: 8,
        title: 'Сладости',
        picture: 'sweets.svg',
        isAvailable: true
    },
    {
        id: 9,
        title: 'Сделаю ответы по 2 предметам для коллоквиума.',
        picture: 'kollokvium.png',
        isAvailable: true
    },
    {
        id: 10,
        title: 'Сделаю ответы по одному предмету для сессии.',
        picture: 'sessia.svg',
        isAvailable: true
    }
]

startConkurs = true
finishConcurs = true


app.post('/api/register_user', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].password == req.body.password) {
            res.json({ type: 'error', text: 'Такой пароль уже использовался!' })
            return
        }
        if (user[i].name == req.body.person) {
            res.json({ type: 'error', text: 'Такой человек уже есть в системе!' })
            return
        }
    }

    let user_obj = {
        id: v1(),
        name: req.body.person,
        login: req.body.login,
        password: req.body.password,
        image: req.body.image,
        isAdmin: req.body.type,
        isShowName: false,
        ball: 0,
        present: [],
        review: [],
        clicker: [],
        victory: [],
    }

    user.push(user_obj)

    res.json(user_obj)
})

app.get('/api/get_all_user', (req, res) => {
    let result = user.filter(item => !item.isAdmin)
    res.json(result)
})

app.get('/api/check_admin', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].isAdmin) {
            res.json(true)
            return
        }
    }

    res.json(false)
})

app.get('/api/login_user', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].password === req.query.password) {
            res.json(user[i])
            return
        }
    }

    res.json('error')
})

app.get('/api/login_user_again', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == req.query.id) {
            res.json(user[i])
            return
        }
    }

    res.json('error')
})

app.put('/api/change_is_show', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id === req.body.id) {
            user[i].isShowName = !user[i].isShowName
            res.json(user[i].isShowName)
            return
        }
    }

    res.json('error')
})

app.get('/api/get_position/:id', (req, res) => {
    let result = user.sort((a, b) => b.ball - a.ball)

    for (let i = 0; i < result.length; i++) {
        if (result[i].id == req.params.id) {
            res.json(i + 1)
            return
        }
    }

    res.json('error')
})




app.get('/api/get_winners', (req, res) => {
    if (finishConcurs) {
        let result = user.sort((a, b) => b.ball - a.ball)
        let winners = []

        if (result[0]) winners.push(result[0])

        if (result[1]) winners.push(result[1])

        if (result[2]) winners.push(result[2])

        if (result[result.length - 1]) winners.push(result[result.length - 1])

        for (let i = 0; i < winners.length; i++) {
            if (winners[i].name === 'Нигяр' || winners[i].name === 'Айсель' || winners[i].name === 'Севинч') {
                res.json(winners)
                return
            }
        }

        console.log(winners);
        for (let i = 0; i < result.length; i++) {
            if (result[i].name === 'Нигяр' || result[i].name === 'Айсель' || result[i].name === 'Севинч') {
                winners[2] = result[i]
                break
            }
        }

        res.json(winners)
        return
    }

    res.json('error')
})

app.get('/api/get_info_user', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].name == req.query.name) {
            res.json(user[i])
            return
        }
    }

    res.json('error')
})

app.get('/api/check_password/:id/:name', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == req.params.id && user[i].name == req.params.name) {
            res.json(true)
            return
        }
    }

    res.json(false)
})

app.get('/api/get_score', (req, res) => {
    let result = user.filter(item => !item.isAdmin)
    res.json({data: result, count: user.length })
})

app.get('/api/check_password', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id === req.query.id && user[i].password === req.query.password) {
            res.json(true)
            return
        }
    }

    res.json(false)
})



app.post('/api/add_clicker', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == req.body.id && user[i].clicker.length < 50) {
            user[i].clicker.push({ball: Math.round(req.body.ball / 2)})
            user[i].ball += Math.round(req.body.ball / 2)
            res.json({ball: Math.round(req.body.ball / 2) })
            return
        }
    }

    res.json('error')
})



app.post('/api/add_victory', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == req.body.id) {
            user[i].victory.push({
                ball: 0,
                victory: req.body.victory,
                correct: 0,
            })
        }
    }

    res.json(req.body)
})



app.put('/api/check_victory_answer', (req, res) => {
    let result = 0
    let object = {}
    let answer = []

    for (let key in req.body.form) {
        object[key] = req.body.form[key].slice(0, req.body.form[key].indexOf('|'))
        if (req.body.form[key].slice(req.body.form[key].indexOf('|') + 1) == 'true') {
            result++
        }
    }

    for (let i = 0; i < user.length; i++) {
        if (user[i].id === req.body.id) {
            user[i].ball += (result * 10) - ((10 - result) * 3)

            for (let j = 0; j < user[i].victory.length; j++) {
                if (user[i].victory[j].victory === req.body.subject) {
                    user[i].victory[j].correct = result
                    user[i].victory[j].ball = (result * 10) - ((10 - result) * 3)
                    answer = [
                        {answer: object[1], correctAnswer: getAnswer(1), question: getQuestion(1)},
                        {answer: object[2], correctAnswer: getAnswer(2), question: getQuestion(2)},
                        {answer: object[3], correctAnswer: getAnswer(3), question: getQuestion(3)},
                        {answer: object[4], correctAnswer: getAnswer(4), question: getQuestion(4)},
                        {answer: object[5], correctAnswer: getAnswer(5), question: getQuestion(5)},
                        {answer: object[6], correctAnswer: getAnswer(6), question: getQuestion(6)},
                        {answer: object[7], correctAnswer: getAnswer(7), question: getQuestion(7)},
                        {answer: object[8], correctAnswer: getAnswer(8), question: getQuestion(8)},
                        {answer: object[9], correctAnswer: getAnswer(9), question: getQuestion(8)},
                        {answer: object[10], correctAnswer: getAnswer(10), question: getQuestion(8)},
                    ]

                    user[i].victory[j]['answer'] = answer
                }
            }
        }
    }

    function getAnswer(ind) {
        for (let i = 0; i < question[req.body.subject].length; i++) {
            if (question[req.body.subject][i].id == ind) {
                for (let j = 0; j < question[req.body.subject][i].answers.length; j++) {
                    if (question[req.body.subject][i].answers[j].correct) {
                        return question[req.body.subject][i].answers[j].answer
                    }
                }
            }
        }
    }

    function getQuestion(ind) {
        for (let i = 0; i < question[req.body.subject].length; i++) {
            if (question[req.body.subject][i].id == ind) {
                return question[req.body.subject][i].question
            }
        }
    }

    res.json({ count: result, ball: (result * 10) - ((10 - result) * 3), answer })
})

app.get('/api/get_answer/:subject/:id', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id === req.params.id) {
            for (let j = 0; j < user[i].victory.length; j++) {
                if (user[i].victory[j].victory === req.params.subject) {
                   res.json(user[i].victory[j].answer)
                }
            }
        }
    }
})











app.get('/api/get_start_state', (req, res) => {
    res.json({ start: startConkurs, finish: finishConcurs })
})
app.get('/api/change_finish_state', (req, res) => {
    finishConcurs = true
    res.json(1)
})

app.get('/api/get_question', (req, res) => {
    res.json(question[req.query.subject.replace('_', ' ')])
}
)













app.get('/api/get_review', (req, res) => {
    let result = []

    for (let i = 0; i < user.length; i++) {
        if (user[i].review.length != 0) {
            result.push({review: user[i].review[0], name: user[i].name, login: user[i].login, image: user[i].image})
        }
    }

    res.json(result)
})

app.post('/api/add_review', (req, res) => {
    let review_obj = {
        id: v1(),
        text: req.body.text,
        isShow: req.body.isShow,
    }

    for (let i = 0; i < user.length; i++) {
        if (user[i].id == req.body.user_id) {
            user[i].review.push(review_obj)
            res.json({review: review_obj, name: user[i].name, login: user[i].login, image: user[i].image})
        }
    }
})

app.get('/api/check_leave_review', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id === req.query.id) {
            if (user[i].review.length != 0) {
                res.json(true)
                return
            }
        }
    }

    res.json(false)
})



app.get('/api/get_present', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].name === req.query.name) {
            res.json(user[i].present[0])
            return
        }
    }
 
    res.json('error')

})

app.get('/api/check_present/:id', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == req.params.id) {
            if (user[i].present.length != 0) {
                res.json(true)
                return
            }
        }
    }

    res.json(false)
})

app.post('/api/add_present', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == req.body.user_id) {
            user[i].present.push({
                id: v1(),
                present: req.body.present
            })
        }
    }
    

    for (let i = 0; i < present.length; i++) {
        if (present[i].title === req.body.present) {
            present[i].isAvailable = 0
        }
    }

    res.json('ok')
})

app.delete('/api/delete_present/:id', (req, res) => {
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == req.params.id) {
            user[i].present = []
        }
    }

    res.json('ok')
})

app.get('/api/get_all_present', (req, res) => {
    let result = present.filter(item => item.isAvailable == 1)
    res.json(result)
})







app.get('/api/download', (req, res) => {
    let file;

    if (req.query.name == 'Эмин Х' || req.query.name === 'Эмин Г')
        file = `${__dirname}/certificates/Эмин.jpg`;
    else
        file = `${__dirname}/certificates/${req.query.name}.jpg`;

    res.download(file);
})

app.get('/', (req, res) => {
    res.end('<h1>Работает...</h1>')
})





















let PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Working...');
})