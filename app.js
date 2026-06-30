const Team = require("./models/team");
const players = require("./testData");
const AuctionUtils = require("./utils/auctionUtils");

const csk = new Team("CSK");
const rcb = new Team("RCB");

console.log("Cricket Auction Manager\n");

console.log("Eligible Players:\n");

players.forEach(player => {

    if (player.age >= 18) {

        console.log(
            "ID: " + player.id +
            ", Name: " + player.name +
            ", Age: " + player.age +
            ", PlayerType: " + player.playerType.toLowerCase() +
            ", Base Price: " + player.basePrice
        );

    }

});

AuctionUtils.startAuction(players, csk, rcb);

console.log("\nAuction Result");

csk.showPlayers();

rcb.showPlayers();