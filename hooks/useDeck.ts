import { useState, useEffect } from "react";
import { getDeckFromFile, getDeckFromUrl } from "../services/getDeck";
import { Deck } from "../config/types";

export function useDeck(query: any): Deck | null {
    const [deck, setDeck] = useState<Deck | null>(null);

    useEffect(() => {
        if (query.f) {
            setDeck(getDeckFromFile(query.f));
        } else {
            setDeck(getDeckFromUrl(query.u));
        }
    }, [setDeck, query]);
    return deck
}