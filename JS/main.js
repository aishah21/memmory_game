/*console.log("Up and running!");
//var cardOne = "queen";
//var cardTow = "king";
//var cardFour = "king";
//console.log("User flipped " + cardOne);
var cards=["queen","queen","king","king"];
var cardsInPlay=[];
var cardOne=cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped "+cardOne);
var cardTwo=cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped "+cardTwo);
if(cardsInPlay.length===2){
	if(cardsInPlay[0]===cardsInPlay[1]){
		alert("You found a match!");

	}
	else{
		alert("Sorry, try again");
	}
}
*/
function checkForMatch(p1,p2){
	if (p1 === p2) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}
function flipcard(cardId){
	var cards=["queen","queen","king","king"];
	var cardsInPlay=[];
	console.log("User flipcard "+cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch(cardsInPlay[0],cardsInPlay[1]);
}

flipcard(0);
flipcard(2);