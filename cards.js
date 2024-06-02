const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];

// Define la función dealCards fuera de shuffleDeck
function dealCards(numCards) {
    const dealtCards = deck.splice(0, numCards);
    return dealtCards;
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

shuffleDeck();
const player1 = dealCards(3);
const player2 = dealCards(3);

console.log(player1);
console.log(player2);
