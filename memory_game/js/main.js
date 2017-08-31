/**
 * Created by Kasia on 8/28/2017.
 */
console.log("Up and running!")

var cards = ["queen", "queen", "king", "king"];

cardsInPlay = [];

var checkForMatch = function(){
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match!");
        }
        else {
            alert("Sorry, try again");
        }
    }
}

var flipCard = function(cardId){

    console.log("User flipped " + cards[cardId]);

    cardsInPlay.push(cards[cardId]);

    checkForMatch();
};

flipCard(0);
flipCard(2);


