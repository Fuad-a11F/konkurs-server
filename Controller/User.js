const connection = require('../db')

class User {
    addUser(req, res) {
        connection.query(`SELECT * FROM users WHERE password = '${req.body.password}'`, (error, rows, field) => {
            if (error) return error

            if (rows.length != 0) {
                res.json({type: 'error', text: 'Такой пароль уже использовался!'}) 
                return
            }

            connection.query(`SELECT * FROM users WHERE name = '${req.body.person}'`, (error, rows, field) => {
                if (error) return error

                if (rows.length != 0) {
                    res.json({type: 'error', text: 'Такой человек уже есть в системе!'})
                    return
                }

                connection.query(`INSERT INTO users (name, login, password, image, isAdmin)
                                VALUES ('${req.body.person}', '${req.body.login}', '${req.body.password}', '${req.body.image}', ${req.body.type})`, (error, rows, field) => {
                    if (error) return error

                    connection.query(`SELECT * FROM users WHERE password = '${req.body.password}' ` , (error, rows, field) => {
                        if (error) return error

                        let user = rows[0]

                        connection.query(`SELECT COUNT(id) AS count, SUM(ball) AS ball FROM clicker WHERE user_id = '${user.id}'` , (error, rows, field) => {
                            if (error) return error
                            
                            user['clicker'] = rows[0]

                            connection.query(`SELECT COUNT(id) AS count, SUM(ball) AS ball FROM victory WHERE user_id = '${req.query.id}'` , (error, rows, field) => {
                                if (error) return error
                                user['victory'] = rows[0]
            
                                connection.query(`SELECT * FROM victory WHERE user_id = '${req.query.id}'` , (error, rows, field) => {
                                    if (error) return error
                                    
                                    user['victory']['info'] = []
            
                                    for (let i = 0; i < rows.length; i++) {
                                        user['victory']['info'].push(rows[i])
                                    }
                
                                    res.json(user)  
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    getAllUser(req, res) {
        connection.query('SELECT * FROM `users`', (error, rows, field) => {
            if (error) return error

            res.json(rows)
        })
    }
    
    getScore(req, res) {
        connection.query('SELECT * FROM `users`', (error, rows, field) => {
            if (error) return error

            res.json({data: rows, count: rows.length})
        })
    }

    checkAdmin(req, res) {
        connection.query('SELECT count(id) AS "hasAdmin" FROM users WHERE isAdmin = 1', (error, rows, field) => {
            if (error) return error

            res.json(rows[0].hasAdmin == 0 ? false : true)
        })
    }

    getUser(req, res) {
        connection.query(`SELECT * FROM users WHERE password = '${req.query.password}'`, (error, rows, field) => {
            if (error) return error
            
            connection.query(`SELECT * FROM users WHERE password = '${req.query.password}'` , (error, rows, field) => {
                if (error) return error
    
                if (rows.length == 0) res.json('error')
                
                else {
                    let user = rows[0]
               
                    connection.query(`SELECT COUNT(id) AS count, SUM(ball) AS ball FROM clicker WHERE user_id = '${user.id}'` , (error, rows, field) => {
                        if (error) return error

                        user['clicker'] = rows[0]

                        connection.query(`SELECT COUNT(id) AS count, SUM(ball) AS ball FROM victory WHERE user_id = '${req.query.id}'` , (error, rows, field) => {
                            if (error) return error
                            user['victory'] = rows[0]
        
                            connection.query(`SELECT * FROM victory WHERE user_id = '${req.query.id}'` , (error, rows, field) => {
                                if (error) return error
                                
                                user['victory']['info'] = []
        
                                for (let i = 0; i < rows.length; i++) {
                                    user['victory']['info'].push(rows[i])
                                }
            
                                res.json(user)  
                            })
                        })
                    })
                }
            })
        })
    }

    getUserAgain(req, res) {
        connection.query(`SELECT * FROM users WHERE id = '${req.query.id}'` , (error, rows, field) => {
            if (error) return error
            let user = rows[0]
   
            connection.query(`SELECT COUNT(id) AS count, SUM(ball) AS ball FROM clicker WHERE user_id = '${req.query.id}'` , (error, rows, field) => {
                if (error) return error
                
                user['clicker'] = rows[0]

                connection.query(`SELECT COUNT(id) AS count, SUM(ball) AS ball FROM victory WHERE user_id = '${req.query.id}'` , (error, rows, field) => {
                    if (error) return error
                    user['victory'] = rows[0]

                    connection.query(`SELECT * FROM victory WHERE user_id = '${req.query.id}'` , (error, rows, field) => {
                        if (error) return error
                        
                        user['victory']['info'] = []

                        for (let i = 0; i < rows.length; i++) {
                            user['victory']['info'].push(rows[i])
                        }
    
                        res.json(user)  
                    })
                })
            })
        })
    }

    getClicker(req, res) {
        connection.query(`SELECT * FROM clicker WHERE user_id = '${req.params.id}'`, (error, rows, field) => {
            if (error) return error

            res.json(rows)
        })
    }
    
    getVictory(req, res) {
        connection.query(`SELECT * FROM victory WHERE user_id = '${req.params.id}'` , (error, rows, field) => {
            if (error) return error

            res.json(rows)
        })
    }

    checkPassword(req, res) {
        connection.query(`SELECT * FROM users WHERE id = '${req.query.id}' AND password = '${req.query.password}'`, (error, rows, field) => {
            if (error) return error
            rows[0] ? res.json(true) : res.json(false)
        })
    }

    changeIsShow(req, res) {
        connection.query(`UPDATE users SET isShowName = '${req.body.isShowName == 0 ? 1 : 0}' WHERE id = '${req.body.id}'`, (error, rows, field) => {
            if (error) return error

            res.json(req.body.isShowName == 0 ? 1 : 0)
        })
    }

    changePassword(req, res) {
        connection.query(`SELECT count(id) AS hasPassword FROM users WHERE password = '${req.body.new_password}'`, (error, rows, field) => {
            if (error) return error

            if (rows[0].hasPassword != 0) res.json('error')

            else {
                connection.query(`UPDATE users SET password = '${req.body.new_password}' WHERE id = '${req.body.id}'`, (error, rows, field) => {
                    if (error) return error
                    res.json('ok')
                })
            }
        })
    }

    addClicker(req, res) {
        connection.query(`SELECT COUNT(id) AS 'count' FROM clicker WHERE user_id = '${req.body.id}' `, (error, rows, field) => {
            if (error) return error

            if (rows[0].count < 100) {
                connection.query(`INSERT INTO clicker (user_id, ball)
                            VALUES (${req.body.id}, ${Math.round(req.body.ball / 2)})`, (error, rows, field) => {
                    if (error) return error
                                
                    connection.query(`UPDATE users SET ball = ball + ${Math.round(req.body.ball / 2)} WHERE id = ${req.body.id}`, (error, rows, field) => {
                        let clicker = {ball: Math.round(req.body.ball / 2), user_id: req.body.id}
                        res.json({clicker, ball: Math.round(req.body.ball / 2)})
                    })

                })
            }
        })  
    }

    getAnswer(req, res) {
        connection.query(`SELECT * FROM victory WHERE victory = '${req.params.subject}' AND user_id = ${req.params.id}`, (error, rows, field) => {
            if (error) return error

            connection.query(`SELECT * FROM answer WHERE victory_id = ${rows[0].id}`, (error, rows, field) => {
                if (error) return error

                res.json(rows)
            })
        })

    }

    getPosition(req, res) {
        connection.query("SELECT * FROM users ORDER BY ball DESC", (error, rows, field) => {
            if (error) return error

            for (let i = 0; i < rows.length; i++) {
                if (rows[i].id == req.params.id) {
                    res.json(i + 1)
                    return
                }
            }

            res.json('error')
        })    
    }

    getWinners(req, res) {
        connection.query("SELECT finishConcurs FROM konkurs WHERE id = 1", (error, rows, field) => {
            if (error) return error

            if (rows[0].finishConcurs) {
                connection.query("SELECT * FROM users WHERE NOT ball = 0 ORDER BY ball DESC", (error, rows, field) => {
                    if (error) return error
        
                    let winners = []
        
                    if (rows[0]) winners.push(rows[0])
                    
                    if (rows[1]) winners.push(rows[1])     
        
                    if (rows[2]) winners.push(rows[2])      
        
                    if (rows[rows.length - 1]) winners.push(rows[rows.length - 1])
                    
                    for (let i = 0; i < winners.length; i++) {
                        if (winners[i].name === 'Нигяр' || winners[i].name === 'Айсель' || winners[i].name === 'Севинч') {
                            res.json(winners)
                            return
                        }
                    }
            
                    for (let i = 0; i < rows.length; i++) {
                        if (rows[i].name === 'Нигяр' || rows[i].name === 'Айсель' || rows[i].name === 'Севинч') {
                                winners[2] = rows[i]
                                break
                        }
                    }
            
                    res.json(winners)
                }) 
            }

            else [
                res.json('error')
            ] 
        }) 
    }

    changeLogin(req, res) {
        connection.query(`UPDATE users SET login = '${req.body.login}' WHERE id = '${req.body.id}'`, (error, rows, field) => {
            if (error) return error

            res.json(req.body.login)
        })
    }

    getInfoUser(req, res) {
        connection.query(`SELECT * FROM users WHERE name = '${req.query.name}'`, (error, rows, field) => {
            if (error) return error

            rows[0] ? res.json(rows[0]) : res.json('error')
        })   
    }

    checkUserByPassword(req, res) {
        connection.query(`SELECT * FROM users WHERE id = ${req.params.id} and name = '${req.params.name}'`, (error, rows, field) => {
            if (error) return error
            rows[0] ? res.json(true) : res.json(false)
        }) 
    }

    addVictory(req, res) {
        connection.query(`INSERT INTO victory (user_id, ball, victory, correct)
                        VALUES (${req.body.id}, 0, '${req.body.victory}', 0)`, (error, rows, field) => {
            if (error) return error

            res.json(req.body)
        })
    }

    checkVictory(req, res) {
        let result = 0
        let object = {}

        for (let key in req.body.form) {
            object[key] = req.body.form[key].slice(0, req.body.form[key].indexOf('|'))        
            if (req.body.form[key].slice(req.body.form[key].indexOf('|') + 1) == 'true') {
                result++
            }
        }    

        connection.query(`UPDATE victory SET correct = ${result}, ball = ${(result * 10) - ((10 - result) * 3)}
                            WHERE user_id = ${req.body.id} AND victory = '${req.body.subject}'`, (error, rows, field) => {
            if (error) return error

            connection.query(`SELECT id FROM victory WHERE user_id = ${req.body.id} AND victory = '${req.body.subject}'`, (error, rows, field) => {
                if (error) return error

                connection.query(`INSERT INTO answer (victory_id, answer, user_id) VALUES 
                                (${rows[0].id}, '${object[1]}', ${req.body.id}),
                                (${rows[0].id}, '${object[2]}', ${req.body.id}),
                                (${rows[0].id}, '${object[3]}', ${req.body.id}),
                                (${rows[0].id}, '${object[4]}', ${req.body.id}),
                                (${rows[0].id}, '${object[5]}', ${req.body.id}),
                                (${rows[0].id}, '${object[6]}', ${req.body.id}),
                                (${rows[0].id}, '${object[7]}', ${req.body.id}),
                                (${rows[0].id}, '${object[8]}', ${req.body.id}),
                                (${rows[0].id}, '${object[9]}', ${req.body.id}),
                                (${rows[0].id}, '${object[10]}', ${req.body.id})`, (error, rows, field) => {
                    if (error) return error

                    connection.query(`UPDATE users SET ball = ball + ${(result * 10) - ((10 - result) * 3)} WHERE id = ${req.body.id}`, (error, rows, field) => {
                        if (error) return error

                        res.json({count: result, ball: (result * 10) - ((10 - result) * 3)})
                    }) 
                })
            })               
        })
    }

    fortuneUnavailable(req, res) {
        connection.query(`UPDATE users SET canFortune = 0, ball = ball + ${req.body.ball} WHERE id = '${req.body.id}'`, (error, rows, field) => {
            if (error) return error

            res.json(req.body.ball)
        })
    }

    fortuneAvailable(req, res) {
        connection.query(`UPDATE users SET canFortune = 1`, (error, rows, field) => {
            if (error) return error

            res.json('ok')
        })
    }
}

module.exports = new User()