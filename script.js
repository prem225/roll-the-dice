let images=["Dice1.png","Dice2.png","Dice3.png","Dice4.png","Dice5.png","Dice6.png"];


let dice= document.querySelectorAll("img");
let score = 0;
function diceRoll(){
    var rollDice=Math.floor(Math.random()*6);
    document.getElementById("random-dice").src=images[rollDice];
    console.log(rollDice);
    var buttonchoosed = document.getElementById("variable").innerHTML;
    var buttonValue = document.getElementById(buttonchoosed).value;
    if(rollDice+1 == buttonValue){

        document.getElementById("warning").innerHTML="You win!😎";
        score+=10;

    }else{
        document.getElementById("warning").innerHTML="You lose🙁";
        score-=10;

    }
    document.getElementById("score").innerHTML=score;
}

function btnClick(click_id){ 
    let btn=click_id;
    document.getElementById("variable").innerHTML=btn;

}

