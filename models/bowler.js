const Player = require("./player");

class Bowler extends Player {

    constructor(id, name, age, basePrice) {
        super(id, name, age, "Bowler", basePrice);
    }

}

module.exports = Bowler;