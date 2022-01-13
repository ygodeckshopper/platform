import { useState, useEffect } from 'react'
import { getCardById } from '../services/getCard'

export function useCard(id: string) {
    const [card, setCard] = useState();
    useEffect(() => {
        getCardById(id).then((card) => {setCard(card)}).catch(() => setCard(undefined));
    }, [setCard, id])
    return [card, setCard];
}

export default useCard;