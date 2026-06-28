const Player = require("./player");

class Batsman extends Player {

    constructor(id, name, age) {
        super(id, name, age, "Batsman");
    }

}

module.exports = Batsman;