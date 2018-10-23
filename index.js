const Room = require('./models/room')
const Home = require('./models/home')
const Database = require('./utils/database')

const home1 = new Home('Suj', 'Berlin')

const room1 = new Room('Big room', 12)
const room2 = new Room('Midle room', 5)
const room3 = new Room('Small room', 3)
const room4 = new Room('Kitchen', 5)
const room5 = new Room('Bathroom', 3)

room1.create(home1)
room2.create(home1)
room3.create(home1)
room4.create(home1)
room5.create(home1)

home1.report()

Database.save(home1)

const loadedFile = Database.load()
console.log(loadedFile.rooms)
