import parse from "../utils/parseYdk";

export function getDeckFromFile(src: string) {
    const deck = parse(Buffer.from(src, 'base64').toString());
    return deck;
}

export default getDeckFromFile;