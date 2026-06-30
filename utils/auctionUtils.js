class AuctionUtils {

    static startAuction(players, teamA, teamB) {

        const soldPrices = [
            3500000,
            3200000,
            4000000,
            3000000,
            2500000,
            3800000,
            2200000,
            2100000,
            2800000,
            2300000
        ];

        let count = 0;

        for (let player of players) {

            if (player.age < 18) {
                continue;
            }

            player.soldPrice = soldPrices[count];

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