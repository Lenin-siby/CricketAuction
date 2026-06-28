class Team {

    constructor(teamName) {
        this.teamName = teamName;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
    }

    showPlayers() {

        console.log("\n" + this.teamName);

        this.players.forEach(player => {
            console.log(
                "ID : " + player.id +
                " | Name : " + player.name +
                " | Age : " + player.age +
                " | Role : " + player.role
            );
        });

    }

}

module.exports = Team;