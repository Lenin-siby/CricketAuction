const Batsman = require("./models/batsman");
const Bowler = require("./models/bowler");
const AllRounder = require("./models/allRounder");

const players = [

    new Batsman(1, "Virat Kohli", 35),
    new Bowler(2, "Jasprit Bumrah", 30),
    new AllRounder(3, "Hardik Pandya", 31),
    new Batsman(4, "Rohit Sharma", 37),
    new Bowler(5, "Mohammed Shami", 34),

    new AllRounder(6, "Ravindra Jadeja", 35),
    new Batsman(7, " Shubhman Gill", 25),
    new Bowler(8, "Muhammed Siraj", 30),
    new AllRounder(9, "Axar Patel", 30),
    new Batsman(10, "Ishan Kishan", 23)

];

module.exports = players;