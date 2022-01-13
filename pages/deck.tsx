import type { NextPage } from "next"
import { useRouter } from "next/router"
import Card from "../components/Card"
import { useDeck } from "../hooks/useDeck"

const DeckPage: NextPage = () => {
    const router = useRouter()
    const deck = useDeck(router.query);
    return deck !== null ? (
        <div>
            {JSON.stringify(deck)}
            <Card id={deck.main[0]}></Card>
        </div>
    ) : (
        <div>SPINNER</div>
    )
}

export default DeckPage;