// Define the Card interface
interface Card {
    value: string;
    suit: string;
}

// Shuffle deck
export const shuffleDeck = () => {
    let deck = Array.from({ length: 52 }, (_, i) => i + 1); // Creates an array [1, 2, ..., 52]

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
};

// Evaluate hand function
export const evaluateHand = (hand: number[]) => {
    let value = 0;
    let aces = 0;

    for (let cardNumber of hand) {
        let cardValue = (cardNumber - 1) % 13 + 1;

        if (cardValue === 1) { // Ace
            aces += 1;
            value += 11;
        } else if (cardValue >= 11) { // J, Q, K
            value += 10;
        } else {
            value += cardValue; // 2 to 10
        }
    }

    while (value > 21 && aces > 0) {
        value -= 10;
        aces -= 1;
    }

    return value;
};

// Function to map a card number to a Card object
export function mapNumberToCard(num: number): Card {
    if (num < 1 || num > 52) throw new Error("Invalid card number");
    const suits = ["spades", "hearts", "diamonds", "clubs"];
    const values = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"];
    const suitIndex = Math.floor((num - 1) / 13);
    const valueIndex = (num - 1) % 13;
    return { value: values[valueIndex], suit: suits[suitIndex] };
}

// Function to get the image URL for a card
export function getCardImageUrl(card: Card): string {
    return `${process.env.NEXT_PUBLIC_URL}/Cards/${card.value}_of_${card.suit}.png`;
}

// Function to get the back image URL
export function getBackImageUrl(): string {
    return `${process.env.NEXT_PUBLIC_URL}/Back.png`;
}
