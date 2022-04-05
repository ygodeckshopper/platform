import Card from "./Card"
import { IDeck } from "../config/types"
import useDeckData from "../hooks/useDeckData";

export function Deck({deck}: DeckProps) {
    const deckData = useDeckData(deck);
    console.log(deckData);
    return deckData ? (
        <>
            <div>Monsters</div>
            {deckData.main.monsters.map((card, index) => (
                <Card card={card} key={`${card.name}-${index}`}/>
            ))}
            <div>Spell and Trap cards</div>
            {deckData.main.spells.concat(deckData.main.traps).map((card, index) => (
                <Card card={card} key={`${card.name}-${index}`} />
            ))}
            <div>Extra Deck</div>
            {deckData.extra.map((card, index) => (
                <Card card={card} key={`${card.name}-${index}`} />
            ))}
        </>
    ) : (<></>)
}

export interface DeckProps {
    deck: IDeck;
}

export default Deck;