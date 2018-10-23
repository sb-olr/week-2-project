module.exports = class Room {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    create(home) {
        home.rooms.push(this);
    }
}
