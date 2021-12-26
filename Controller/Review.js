let {v1: uuidv1} = require('uuid')
const connection = require('../db')

class Review {
    addReview(req, res) {
        connection.query(`INSERT INTO review (text, isShow, user_id) 
                        VALUES ('${req.body.text}', ${req.body.isShow}, ${Number(req.body.user_id)})`, (error, rows, fields) => {
            if (error) return error;

            connection.query(`SELECT * FROM review JOIN users ON review.user_id = users.id WHERE user_id = ${req.body.user_id}`, (error, rows, fields) => {
                if (error) return error
                
                res.json(rows[0])
            })
        })
    }

    getAll(req, res) {
        connection.query(`SELECT * FROM review JOIN users ON review.user_id = users.id`, (error, rows, fields) => {
            if (error) return error

            res.json(rows)
        })
    }

    checkLeave(req, res) {
        connection.query(`SELECT * FROM review WHERE user_id = ${req.query.id}`, (error, rows, fields) => {
            if (error) return error
      
            if (rows.length == 0) {
                res.json(false)
                return
            }
            
            res.json(true)
        })

        return true
    }

}

module.exports = new Review()