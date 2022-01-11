import parse from './parseYdk';

export default function isValidDeck(deck: string) {
    const file = parse(deck);
    console.log(file);
    return false;
}
