import parse from './parseYdk';

export default function isValidDeck(deck: string) {
    try {
        parse(deck);
        return true;
    } catch (err) {
        return false;
    }
}
