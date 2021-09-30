import { NextApiRequest, NextApiResponse } from 'next';

export default async function contact(req: NextApiRequest, res: NextApiResponse) {

    console.log(req.body.backEndTemp)

    res.status(200).json({ message: 'ok' })
}
