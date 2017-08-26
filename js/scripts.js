//back-end logic
function Player(Name, turnScore, totalScore) {
    this.Name = Name;
    this.turnScore = turnScore;
    this.totalScore = totalScore;
}

Player.prototype.roll = function () {
    var dieRanVal = (Math.floor(Math.random() * 6) + 1)
    //    console.log(dieRanVal)
    if (dieRanVal === 1) {
        this.turnScore = 0
        alert("Ooops! You rolled a 1. It's  " + this.Name +"'s turn")
    } else {
        this.turnScore = this.turnScore + dieRanVal
        //        console.log(this.turnScore)
    }
    return dieRanVal
}
Player.prototype.score= function () {
    this.totalScore += this.turnScore
    this.turnScore = 0
    
    if(this.totalScore >= 100){
        alert("GAme Over");
    }else{
        alert("your turn is over")
    }
}

function Clearfield() {
    $("#player1").val("");
    $("#player2").val("");
}

var player1, player2;

//user Interface
$(document).ready(function () {
    $("#rules-hidden").click(function () {
        $("#rules-hiding").toggle();
        $("#rules-showing").toggle();
    })
    $(".click").click(function (event) {

        //        $("#players-hiding").toggle();
        $("#players-showing").toggle();
    })
    $("form").submit(function (event) {
        event.preventDefault();
        //store userinput
        var player1Name = $("#player1").val();
        var player2Name = $("#player2").val();
        //create instances of the object
        player1 = new Player(player1Name, 0, 0);
        player2 = new Player(player2Name, 0, 0);
        //Display the name of the users

        $(".Player1name").text(player1Name);
        $(".Player2name").text(player2Name);

        Clearfield();


    });
    $(".roll1").click(function (event) {
        event.preventDefault();
       // $("#player2-score").hide();
        var player1Roll = player1.roll();

        $(".turn-score").text(player1.turnScore);
        $(".die-roll1").text(player1Roll);
        //console.log(player1.turnScore)
        

    });
    $(".hold1").click(function(event){
        event.preventDefault();
        player1.score();
        $(".total-score").text(player1.totalScore);
        $(".die-roll").text("")
        $(".turn-score").text("");
    })
    //player 2 buttons
    $(".roll2").click(function (event) {
        event.preventDefault();
       // $("#player2-score").hide();
        var player2Roll = player2.roll();

        $(".turn-score2").text(player2.turnScore);
        $(".die-roll2").text(player2Roll);
        console.log(player2.turnScore)
        

    });
    $(".hold2").click(function(event){
        event.preventDefault();
        player2.score();
        $(".total").text(player2.totalScore);
        $(".die-roll2").text("")
        $(".turn-score2").text("");
    })
});
