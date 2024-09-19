//for random values and colors of new cards
function cardValue(){
    return Math.ceil(Math.random() * 9);
}
function cardColor(){
    return Math.ceil(Math.random() * 7);
}

//creates the card items
class Card{
    constructor(){
    this.value = cardValue() 
    //1=red 2=blue 3=green 4=yellow 
    //+ the 3 bonus colors that can be turned on by changing the cardColor function to a higher random
    this.color = cardColor()
    }
}

//create the first card on the top of the stack and send to html
var topStack = document.createElement('div')
var stackCard = new Card()
topStack.className = "unoCard" + stackCard.color
topStack.innerHTML = stackCard.value
topStack.id = "topCard"
document.getElementById('stack').appendChild(topStack);



//create the first 5 cards in the hand
var currentCard = [stackCard.value, stackCard.color] 
var card1 =  new Card()
var card2 =  new Card()
var card3 =  new Card()
var card4 =  new Card()
var card5 =  new Card()
var cards = [card1, card2, card3, card4, card5]

//sends the first 5 cards in the hand to the html
for (i = 0; i < cards.length; i++){
var handCard = document.createElement('div')
handCard.className = "unoCard" + cards[i].color
handCard.innerHTML = cards[i].value
document.getElementById('hand').appendChild(handCard);
}

//adds a new card to the hand
function drawCard(){
var handCard = document.createElement('div')
var tempCard = new Card()
cards.push(tempCard)
handCard.className = "unoCard" + tempCard.color
handCard.innerHTML = tempCard.value
document.getElementById('hand').appendChild(handCard);
}

//draw button listener
document.getElementById('thebutton').addEventListener('click', drawCard)


//checks if the hand is empty
function checkWin(){
    if(cards == "")
    document.getElementById("hand").innerHTML = ("<h2>You Win!!!</h2>")
}

//takes the chosen card for a result
document.getElementById('sendSelection').addEventListener('click', function(){
    var selection = document.getElementById("selection").value
    //if selection is out of range
    if(selection > cards.length){
        document.getElementById("alerts").innerHTML = ("you dont have that many cards")
    }
    //if selection is 0 or negative
    else if (selection < 1){
        document.getElementById("alerts").innerHTML = ("that doesnt make sense")
    }

    else if (cards[selection - 1].value == currentCard[0] || cards[selection - 1].color == currentCard[1]){

    //updates the top card on the stack in the js and the html
    currentCard[0] = cards[selection - 1].value
    currentCard[1] = cards[selection - 1].color
    document.getElementById("topCard").innerHTML = cards[selection - 1].value
    document.getElementById("topCard").className = "unoCard" + cards[selection - 1].color

    //deletes the card that has been moved to the top of the stack
    document.getElementById("hand").childNodes[+selection ].remove();
    //deletes the card in the js arry
    cards.splice(+selection - 1, 1)
    //checks to see if the player has won
    checkWin()
    }

    //this happens if the card cant be played
    else{
        document.getElementById("alerts").innerHTML = ("you cant play that one")
    }
})