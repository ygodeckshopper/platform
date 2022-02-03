import Card from "./Card"
import { IDeck } from "../config/types"

export function Deck({deck}: DeckProps) {
    return (
        <>
            {deck.main.map((id) => {
                return (
                    <Card id={id} key={id}/>
                )
            })}
        </>
    )
}

export interface DeckProps {
    deck: IDeck;
}

export default Deck;