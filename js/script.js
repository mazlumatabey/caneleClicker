var score = 0;
var adding = 10;

function bake() {
    score += adding;
    document.getElementById("number").innerHTML = score;
}

var ovenPrice = 25;

function buyOven()
{
    if (score >= ovenPrice) {
        score -= ovenPrice;
        document.getElementById('number').innerHTML = score;
        adding += 1;
    }
}