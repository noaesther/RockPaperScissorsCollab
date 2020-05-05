var winner = "no one"

var player1 = "";
var player2 = "";

document.getElementById("p1rock").onclick = function (){
	document.getElementById("p1display").innerHTML = "Rock"; player1 = "rock"};

document.getElementById("p1paper").onclick = function (){
	document.getElementById("p1display").innerHTML = "Paper";player1 = "paper"};

document.getElementById("p1scissors").onclick = function (){
	document.getElementById("p1display").innerHTML = "Scissors"; player1 = "scissors"};

document.getElementById("p2rock").onclick = function (){
	document.getElementById("p2display").innerHTML = "Rock"; player2 = "rock"};

document.getElementById("p2paper").onclick = function (){
	document.getElementById("p2display").innerHTML = "Paper"; player2 = "paper"};

document.getElementById("p2scissors").onclick = function (){
	document.getElementById("p2display").innerHTML = "Scissors"; player2 = "scissors"};

document.getElementById("winner2").onclick = function () {
	if(player1== "rock" && player2== "rock" || player1== "paper" && player2== "paper" || player1== "scissors" && player2== "scissors")
	    {document.getElementById("winner").innerHTML = "You Tied! Play Again"
	}else if(player1 =="rock" && player2 =="scissors" || player1== "paper" && player2== "rock" || player1== "scissors" && player2== "paper")
	    {document.getElementById("winner").innerHTML = "Player 1 wins!"
	}else if(player1=="paper" && player2=="scissors" || player1=="rock" && player2=="paper" || player1== "scissors" && player2== "rock")
	    {document.getElementById("winner").innerHTML = "Player 2 wins!"
	}else{document.getElementById("winner").innerHTML = "Play!"}
};