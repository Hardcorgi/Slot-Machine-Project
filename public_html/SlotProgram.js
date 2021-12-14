function slotMachineStart() {
    var symbolsList = ['Bars','Bells','Cherries','Melon','Orange','Plum'];
    var symbolResult = symbolsList[Math.floor(Math.random() * symbolsList.length)];
    return symbolResult;
    }
//Main Program



var winnings;

var playerBet = Number(prompt("Enter your bet!"));

if (isNaN(playerBet)) {
    alert("Must be a number!");
    }
    else {
        var pull1 = slotMachineStart();
        var pull2 = slotMachineStart();
        var pull3 = slotMachineStart();
    }
document.write("[" + pull1 + "][" + pull2 + "][" + pull3 + "]");
document.write("<br>______________________________");
if (pull1 === pull2 && pull1 === pull3) {
    winnings = (playerBet * 3);
} else if (pull1 === pull2 || pull1 === pull3 || pull2 === pull3) {
    winnings = (playerBet * 2);
} else {
    winnings = (playerBet * 0);
}


if (winnings > 0) {
    document.write("<br>______________________________");
    document.write("<br><br><br> You bet $" + playerBet + ".");
    document.write("<br><br> Your winnings are: $" + winnings + "!!!");
    document.write("<br>______________________________");
    
} else {
    document.write("<br>______________________________");
    document.write("<br><br><br> You bet $" + playerBet + ".");
    document.write("<br><br> You lost $" + playerBet + "...");
    document.write("<br>______________________________");
}


