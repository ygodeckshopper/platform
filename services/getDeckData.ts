import { IDeck, IDeckData, card } from "../config/types";
import Axios from "axios";

export function getDeckData(deck: IDeck) : Promise<IDeckData>
{
    return new Promise<IDeckData>((resolve, reject) => {
        const deckData : IDeckData = {
            main: {
                monsters: [],
                spells: [],
                traps: []
            },
            extra: [],
            side: {
                monsters: [],
                spells: [],
                traps: [],
            }
        };
        deck.main.forEach(card => {
            Axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${card}`)
                .then((res) => {
                    if (res.data.data[0].type.includes("Spell")) {
                        deckData.main.spells.push(res.data.data[0] as card);
                    } else if (res.data.data[0].type.includes("Trap")) {
                        deckData.main.traps.push(res.data.data[0] as card);
                    } else {
                        deckData.main.monsters.push(res.data.data[0] as card);
                    }
                })
                .catch(reject);
        });
        deck.extra.forEach(card => {
            Axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${card}`)
                .then((res) => { deckData.extra.push(res.data.data[0] as card)})
                .catch(reject);
        });
        deck.side.forEach(card => {
            Axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${card}`)
                .then((res) => {
                    if (res.data.data[0].type.includes("Spell")) {
                        deckData.side.spells.push(res.data.data[0] as card);
                    } else if (res.data.data[0].type.includes("Trap")) {
                        deckData.side.traps.push(res.data.data[0] as card);
                    } else {
                        deckData.side.monsters.push(res.data.data[0] as card);
                    }
                })
                .catch(reject);
        })
        resolve(deckData);
    });
}

export default getDeckData;