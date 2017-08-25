//back-end logic
function Player(Name, turnScore, totalScore) {
    this.Name = Name;
    this.turnScore = turnScore;
    this.totalScore = totalScore;
}

Player.prototype.roll = function () {
    var dieRanVal = (Math.floor(Math.random() * 6)+1)
    console.log(dieRanVal)
    if (dieRanVal === 1) {
        this.turnScore = 0
        alert("Ooops!The other players turn")
    } else {
        this.turnScore = this.turnScore + dieRanVal
    }
   return dieRanVal 
}
Player.prototype.hold = function (){
    this.turnScore = 0
    this.totalScore += this.turnScore
}

function Clearfield() {
    $("#player1").val("");
    $("#player2").val("");
}



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
        var player1 = new Player(player1Name, 0, 0);
        var player2 = new Player(player2Name, 0, 0);
    //Display the name of the users
        $(".Player1name").text(player1Name);
        $(".Player2name").text(player2Name);
        
        Clearfield();
        
        $(".roll1").click(function (event) {
            event.preventDefault();
            var player1Roll = player1.roll();
            
        $(".turn-score").html(player1Roll.turnScore);
        console.log('displayed')

        });
    })
});
