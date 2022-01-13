import Axios from "axios";

export function getCard(id: string, setCard: any) {
    Axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`).then((result) => {
        setCard(result.data.data[0])
    }).catch(() => {setCard(null)})
}

export default getCard;