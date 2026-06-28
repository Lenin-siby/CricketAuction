const Team = require("./models/team");
const players = require("./testData");
const AuctionUtils = require("./utils/auctionUtils");


const teamA = new Team("TEAM A");
const teamB = new Team("TEAM B");


AuctionUtils.startAuction(players, teamA, teamB);

console.log("========== CRICKET AUCTION ==========");

teamA.showPlayers();
teamB.showPlayers();