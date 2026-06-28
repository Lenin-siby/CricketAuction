const Player = require("./player");

class AllRounder extends Player {

    constructor(id, name, age) {
        super(id, name, age, "All Rounder");
    }

}

module.exports = AllRounder;