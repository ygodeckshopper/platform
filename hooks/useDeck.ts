import { useState, useEffect } from "react";
import { getDeckFromFile, getDeckFromUrl } from "../services/getDeck";
import { IDeck } from "../config/types";

export function useDeck(query: any): IDeck | null {
    const [deck, setDeck] = useState<IDeck | null>(null);

    useEffect(() => {
        if (query.f) {
            setDeck(getDeckFromFile(query.f));
        } else {
            setDeck(getDeckFromUrl(query.u));
        }
    }, [setDeck, query]);
    return deck
}