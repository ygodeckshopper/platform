import type { NextPage } from "next"
import { useRouter } from "next/router"
import Deck from "../components/Deck"
import { useDeck } from "../hooks/useDeck"

const DeckPage: NextPage = () => {
    const router = useRouter()
    const deck = useDeck(router.query);
    return deck !== null ? (
        <div className="bg-slate-600 text-white grid grid-cols-4 gap-4 flex-wrap px-24">
            <Deck deck={deck} />
        </div>
    ) : (
        <div className="h-screen w-screen flex items-center justify-center bg-slate-600">
            <div className="border-t-2 border-r-2 rounded-full border-teal-300 animate-spin w-14 h-14" />
        </div>
    )
}

export default DeckPage;