const Player = require("./player");

class Bowler extends Player {

    constructor(id, name, age) {
        super(id, name, age, "Bowler");
    }

}

module.exports = Bowler;