import axios from "axios";

export function getCardById(id: string): Promise<any | null> {
    return new Promise ((res, rej) => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`).then((result) => {
            res(result.data.data[0]);
        }).catch((err) => { rej(err)} )
    })
}

export default getCardById;