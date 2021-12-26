const connection = require('../db')

class Present {
    addPresent(req, res) {
        connection.query(`INSERT INTO presents (user_id, present)
                        VALUES (${Number(req.body.user_id)}, '${req.body.present}')`, (error, rows, field) => {
            if (error) return error

            connection.query(`UPDATE present SET isAvailable = 0 WHERE title = '${req.body.present}'`, (error, rows, field) => {
                if (error) return error           

                res.json('ok')
            })                
        })
    }

    getPresent(req, res) {
        connection.query(`SELECT presents.present FROM presents JOIN users ON users.id = presents.user_id WHERE users.name = '${req.query.name}'`, (error, rows, fields) => {
            if (error) return error

            if(rows[0]) {
                res.json(rows[0])
                return
            }

            else {
                res.json('error')
            }
        })
    }

    checkPresent(req, res) {
        connection.query(`SELECT * FROM presents JOIN users ON presents.user_id = users.id WHERE user_id = ${req.params.id} `, (error, rows, fields) => {
            if (error) return error

            rows.length != 0 ? res.json(true) : res.json(false) 
        }) 
    }

    deletePresent(req, res) {
        connection.query(`SELECT present FROM presents WHERE user_id = '${req.params.id}'`, (error, rows, fields) => {
            if (error) return error

            connection.query(`UPDATE present SET isAvailable = 1 WHERE title = '${rows[0].present}'`, (error, rows, fields) => {
                if (error) return error

                connection.query(`DELETE FROM presents WHERE user_id = ${req.params.id} `, (error, rows, fields) => {
                    if (error) return error
                    res.json('ok')
                })
            })
        })
    }

    getAllPresent(req, res) {
        connection.query(`SELECT * FROM present WHERE isAvailable = 1`, (error, rows, fields) => {
            if (error) return error

            res.json(rows)
        }) 
    }

}

module.exports = new Present()