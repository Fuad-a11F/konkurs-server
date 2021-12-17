let {v1: uuidv1} = require('uuid')

class User {
    user = []
        
    admin = [
        {id: '1', login: "fuad21", name: "Фуад(Админ)", password: "JavaScript2001!", type: "Админ"}
    ]

    addUser(data) {
        let temp = [...this.user, ...this.admin]
        let check_password = temp.filter(item => item.password === data.password)

        if (check_password.length != 0) {
            return 'Такой пароль уже использовался!'
        }

        let check_name = temp.filter(item => item.name == data.person)

        if (check_name.length != 0) {
            return 'Такой человек уже есть в системе!'
        }

        if (data.type === 'Участник') {
            let user = {
                id: uuidv1(),
                name: data.person,
                login: data.login,
                password: data.password,
                image: data.image,
                isShowName: false,
                ball: 0,
                type: data.type,
                clicker: [],
                victory: [],
                canFortune: true
            }

            this.user.push(user)

            return user
        }

        else if (data.type === 'Админ') {
            let admin = {
                id: uuidv1(),
                name: data.person,
                login: data.login,
                password: data.password,
                type: data.type
            }

            this.admin.push(admin)

            return {user: admin, text: 'Пользователь успешно зарегистрирован!'}
        }
    }

    getAllUser() {
        return this.user
    }

    checkAdmin() {
        return !(this.admin.length == 0) 
    }

    getUser(password) {
        let temp = [...this.user, ...this.admin]
        let user = temp.filter(item => item.password === password)
        if (user.length != 0) {
            return user[0]
        }
        return 'error'
    }

    changeIsShow(data) {
        let check = this.user.filter(item => item.password === data.password)
        check[0].isShowName = !check[0].isShowName
        return check[0].isShowName
    }

    changePassword(data) {
        let check = this.user.filter(item => item.password === data.new_password)
        if (check.length == 0) {
            let passwordUser = this.user.filter(item => item.password === data.password)
            passwordUser[0].password = data.new_password
            return true
        }

        return false
    }

    addClicker(data) {
        let user = this.user.filter(item => item.password === data.password)[0]

        if (user.clicker.length < 100) {
            let clicker = {ball: Math.round(data.ball / 2)}
            user.clicker.push(clicker)
            user.ball += Math.round(data.ball / 2)
            return {clicker, ball: user.ball}
        }
    }

    getPosition(password) {
        let sorted_user = this.user.sort((a, b) => b.ball - a.ball)
        for (let i = 0; i < sorted_user.length; i++) {
            if (sorted_user[i].password === password) {
                return i + 1
            }
        }
    }

    getWinners() {
        let sorted_user = []

        for (let i = 0; i < this.user.length; i++) {
            if (this.user[i].ball != 0) {
                sorted_user.push(this.user[i])
            }
        }

        sorted_user = sorted_user.sort((a, b) => b.ball - a.ball)
  
        let winners = []

        if (sorted_user[0]) {
            winners.push(sorted_user[0])
        }
        if (sorted_user[1]) {
            winners.push(sorted_user[1])
        }        
        if (sorted_user[2]) {
            winners.push(sorted_user[2])
        }        
        if (sorted_user[sorted_user.length - 1]) {
            winners.push(sorted_user[sorted_user.length - 1])
        }
        
        for (let i = 0; i < winners.length - 1; i++) {
            if (winners[i].name === 'Нигяр' ||
            winners[i].name === 'Айсель' || 
            winners[i].name === 'Севинч') {
                return winners
            }
        }

        for (let i = 0; i < sorted_user.length; i++) {
            if (sorted_user[i].name === 'Нигяр' || 
                sorted_user[i].name === 'Айсель' || 
                sorted_user[i].name === 'Севинч') {
                    winners[2] = sorted_user[i]
                    break
            }
        }


        return winners
        
    }

    changeLogin(data) {
        let user = this.user.filter(item => item.password === data.password)[0]
        user.login = data.login
        return data.login
    }

    getInfoUser(name) {
        let user = this.user.filter(item => item.name === name)[0]
        return user
    }

    getUserByPassword(password) {
        return this.user.filter(item => item.password === password)[0].name
    }

    checkUserByPassword(password, name) {
        let name_user = this.user.filter(item => item.password === password)[0] 
        name_user = name_user ? name_user.name : ''
        
        if (name_user == name) {
            return true
        }

        return false
    }

    addVictory(data) {
        let user = this.user.filter(item => item.password === data.password)[0]
        let victory = {victory: data.victory, ball: 0, correct: 0, answers: {}}
        user.victory.push(victory)
        return victory
    }

    checkVictory(data) {
        let user = this.user.filter(item => item.password === data.password)[0]
        let result = 0
        let index = -1

        let object = {}

        for (let i = 0; i < user.victory.length; i++) {
            if (user.victory[i].victory == data.subject) {
                index = i
                for (let key in data.form) {
                    object[key] = data.form[key].slice(0, data.form[key].indexOf('|'))        
                    if (data.form[key].slice(data.form[key].indexOf('|') + 1) == 'true') {
                        result++
                    }
                }       
                user.victory[i].correct = result
                user.victory[i].ball = (result * 10) - ((10 - result) * 3)
                user.victory[i].answers = object
                user.ball += (result * 10) - ((10 - result) * 3)

                break
            }                
        }

        return {count: result, victory: user.victory[index], ball: user.ball}
    }

    fortuneUnavailable(data) {
        let user = this.user.filter(item => item.password === data.password)[0]
        user.canFortune = false
        user.ball += data.ball
        return {ball: data.ball}
    }

    fortuneAvailable() {
        for (let i = 0; i < this.user.length; i++) {
            this.user[i].canFortune = true
        }
    }

    getFortune(password) {
        let user = this.user.filter(item => item.password === password)[0]
        return user.canFortune
    }
    
}

module.exports = new User()