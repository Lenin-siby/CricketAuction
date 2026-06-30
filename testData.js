const Batsman = require("./models/batsman");
const Bowler = require("./models/bowler");
const AllRounder = require("./models/allRounder");

const players = [

    new Batsman(1, "Virat", 35, 2000000),
    new Bowler(2, "Bumrah", 30, 1800000),
    new AllRounder(3, "Hardik", 31, 2000000),
    new Batsman(4, "Rohit", 37, 2000000),
    new Bowler(5, "Shami", 34, 1500000),

    new AllRounder(6, "Jadeja", 35, 2000000),
    new Batsman(7, "Gill", 25, 1200000),
    new Bowler(8, "Siraj", 30, 1400000),
    new AllRounder(9, "Axar", 30, 1700000),
    new Batsman(10, "Jaiswal", 23, 1300000)

];

module.exports = players;