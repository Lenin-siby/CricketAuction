class Player {

    constructor(id, name, age, role) {
        this.id = id;
        this.name = name.toUpperCase();
        this.age = age;
        this.role = role;
    }

}

module.exports = Player;