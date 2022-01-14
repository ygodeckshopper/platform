import { useState, useEffect } from 'react'
import { getCardById } from '../services/getCard'
import type { card } from '../config/types'

export function useCard(id: string) {
    const [card, setCard] = useState<card | undefined>();
    useEffect(() => {
        getCardById(id).then((card) => {setCard(card)}).catch(() => setCard(undefined));
    }, [setCard, id])
    return card;
}

export default useCard;