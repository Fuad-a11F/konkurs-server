class Present {
    present = []

    addPresent(data) {
        this.present.push({name: data.name, present: data.text})
    }

    getPresent(name) {
        for (let i = 0; i < this.present.length; i++) {
            if (this.present[i].name == name) {
                return this.present[i]
            }
        }
    }

    getAllPresent() {
        return this.present
    }

    checkPresent(name) {
        for (let i = 0; i < this.present.length; i++) {
            if (this.present[i].name == name) {
                return true
            }
        }

        return false
    }

    deletePresent(name) {
        for (let i = 0; i < this.present.length; i++) {
            if (this.present[i].name == name) {
                this.present.splice(i, 1)
                return 
            }
        }
    }

}

module.exports = new Present()