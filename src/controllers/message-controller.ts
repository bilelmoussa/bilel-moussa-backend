import { Response, Request } from 'express'
import { addMessage } from '../use-cases'

const addMessageController = async (req: Request, res: Response) => {
    try {
        const message = req.body;

        await addMessage(message);

        res.status(200).json({success: true, res: 'Message sent with success !'});
    } catch (err: any) {
        res.status(err.status || 500).json({ success: false, message: err.message });
    }
}

export { addMessageController }