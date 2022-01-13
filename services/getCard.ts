import axios from "axios";
import type { card } from "../config/types"

export function getCardById(id: string): Promise<card | null> {
    return new Promise ((res, rej) => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`).then((result) => {
            res(result.data.data[0] as card);
        }).catch((err) => { rej(err)} )
    });
}

export default getCardById;