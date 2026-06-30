const Player = require("./player");

class AllRounder extends Player {

    constructor(id, name, age, basePrice) {
        super(id, name, age, "AllRounder", basePrice);
    }

}

module.exports = AllRounder;