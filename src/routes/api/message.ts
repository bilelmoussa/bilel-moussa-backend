import { Router } from 'express'
import { addMessageController } from '../../controllers'

const router = Router();

router.post('/send-message', async (req, res) => {
    await addMessageController(req, res);
})

export { router as message }
