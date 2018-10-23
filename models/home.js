const Chalk = require('chalk')

module.exports = class Home {
    constructor(owner, city) {
        this.owner = owner
        this.city = city
        this.rooms = []
    }

    report() {
        console.log(`${this.owner} has a home with ${Chalk.blue(this.rooms.length)} rooms in ${this.city}`)
    }
}