import { useState, useEffect } from 'react'
import { IDeck, IDeckData } from '../config/types'
import { getDeckData } from '../services/getDeckData'

export function useDeckData(deck: IDeck): IDeckData | null
{
    const [deckData, setDeckData] = useState<IDeckData | null>(null);
    useEffect(() => {
        getDeckData(deck).then((data: IDeckData) => {setDeckData(data)});
    }, [setDeckData, deck])
    return deckData;
}

export default useDeckData;