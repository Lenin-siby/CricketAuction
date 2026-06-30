class Player {

    constructor(id, name, age, playerType, basePrice) {
        this.id = id;
        this.name = name.toUpperCase();
        this.age = age;
        this.playerType = playerType;
        this.basePrice = basePrice;
        this.soldPrice = 0;
    }

}

module.exports = Player;