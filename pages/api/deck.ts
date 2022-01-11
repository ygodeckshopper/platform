import type { NextApiRequest, NextApiResponse } from 'next';
import parse from '../../utils/parseYdk';

function getDeckFromFile(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.file) {
        const file = Buffer.from(req.query.file as string, 'base64').toString(
            'ascii'
        );
        const deck = parse(file);
        console.log(deck);
        res.json(deck);
    }
}

function getDeckFromUrl(req: NextApiRequest, res: NextApiResponse) {
    res.status(500).json({ message: 'Not implemented yet' });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        if (req.query.f) getDeckFromFile(req, res);
        else getDeckFromUrl(req, res);
    } else {
        res.status(404).json({ message: 'Wrong request type' });
    }
}
