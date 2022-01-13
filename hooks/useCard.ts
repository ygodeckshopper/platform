import { useState, useEffect } from 'react'
import getCard from '../services/getCard'

export function useCard(id: string) {
    const [card, setCard] = useState();
    useEffect(() => {
        getCard(id, setCard);
    }, [setCard, id])
    return [card, setCard];
}

export default useCard;