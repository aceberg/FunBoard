import { Card } from "./exports";

export function sortCards(cards: Card[]) {

    cards.sort((a,b) => a.Sort > b.Sort ? 1 : -1);

    return cards;
}