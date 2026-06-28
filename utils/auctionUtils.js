class AuctionUtils {

    static startAuction(players, teamA, teamB) {

        let count = 0;

        for (let player of players) {

            if (player.age < 18) {
                continue;
            }

            if (count < 5) {
                teamA.addPlayer(player);
            } else {
                teamB.addPlayer(player);
            }

            count++;
        }
    }

}

module.exports = AuctionUtils;