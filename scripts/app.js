//  Creating Deck 
function makeDeck () {
    const suits = ['♠', '♣', '♥', '♦']
    // let cards = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', 'LJ', 'BJ']
    let values = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,]
    let deck = [];
    

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 15; j++) {
            let card = {
                suit: suits [i],
                card: cards[j],
                value: values[j]
            } 
            deck.push(card)
            
        }
    }   
    console.log(deck);    
    return deck;
}   

// Creating a shuffle code 
function shuffleDeck(deck) {
    for (let index = 0; index < deck.length; index++) {
        let card = deck[index];
        let randomCard = Math.floor(Math.random() * 52);
        deck[index] = deck[randomCard];
        deck[randomCard] = card
    }
}

//Show deck
function renderDeck(deck)
{
      document.getElementById("deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++)
	{
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);
        
        
		document.getElementById("deck").appendChild(card);
	}
}
