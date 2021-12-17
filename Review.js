let {v1: uuidv1} = require('uuid')

class Review {
    review = []

    addReview(data) {
        this.review.push({
            id: uuidv1(),
            text: data.text,
            name: data.name,
            image: data.image,
            login: data.login,
            isShow: data.isShow
        })
    }

    getAll() {
        return this.review
    }

    checkLeave(name) {
        for (let i = 0; i < this.review.length; i++) {
            if (this.review[i].name === name) {
                return true
            }
        }

        return false
    }

}

module.exports = new Review()