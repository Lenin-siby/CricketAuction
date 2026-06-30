const Player = require("./player");

class Batsman extends Player {

    constructor(id, name, age, basePrice) {
        super(id, name, age, "Batter", basePrice);
    }

}

module.exports = Batsman;