//back-end logic
function Player(Name, turnScore, totalScore){
    this.Name = Name;
    this.turnScore = turnScore;
    this.totalScore =totalScore;
}

Player.prototype.roll = function() {
    var dieValue = [1,2,3,4,5,6]
    
}