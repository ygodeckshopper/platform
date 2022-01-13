import { resultType } from "../config/types";

export default function parse(input: string): resultType | null {
    let key: 'main' | 'extra' | 'side';
    const splitInput = input
        .split('\n')
        .filter(
            (line) =>
                line.length > 0 &&
                (!Number.isNaN(Number(line)) ||
                    line.includes('main') ||
                    line.includes('extra') ||
                    line.includes('side'))
        );
    try {
        const result: resultType = { main: [], extra: [], side: [] };
        splitInput.forEach((line: string) => {
            if (line.includes('main')) key = 'main';
            else if (line.includes('extra')) key = 'extra';
            else if (line.includes('side')) key = 'side';
            else result[key].push(line);
        });
        return result;
    } catch (err) {
        return null;
    }
}
