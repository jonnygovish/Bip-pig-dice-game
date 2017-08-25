//back-end logic
function Player(Name, turnScore, totalScore){
    this.Name = Name;
    this.turnScore = turnScore;
    this.totalScore =totalScore;
}

Player.prototype.roll = function() {
    var dieValue = [1,2,3,4,5,6]
    var dieRanVal = Math.floor(Math.random() * dievalue.length)
    
    
}
//function Clearfield



//user Interface
$(document).ready(function(){
    $("#rules-hidden").click(function(){
        $("#rules-hiding").toggle();
        $("#rules-showing").toggle();
    })
    $(".click").click(function(event){
        
//        $("#players-hiding").toggle();
        $("#players-showing").toggle();
    })
    $("form").submit(function(event){
        event.preventDefault();
        //store userinput
        var player1Name = $("#player1").val();
        var player2Name = $("#player2").val();
        console.log(player1Name)
        console.log(player2Name)
        //Display the name of the users
        $(".Player1name").text(player1Name)
        $(".Player2name").text(player2Name)
    })
});