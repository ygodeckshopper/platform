import { useState, useEffect } from "react";
import { getDeckFromFile, getDeckFromUrl } from "../services/getDeck";
import { resultType } from "../config/types";

export function useDeck(query: any): resultType | null {
    const [deck, setDeck] = useState<resultType | null>(null);

    useEffect(() => {
        if (query.f) {
            setDeck(getDeckFromFile(query.f));
        } else {
            setDeck(getDeckFromUrl(query.u));
        }
    }, [setDeck, query]);
    return deck
}