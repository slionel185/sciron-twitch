import { Router } from 'express'

import run from '@/routes/v1/bot/command/run'
import join from '@/routes/v1/bot/action/join'

const router = Router()

router.post('/bot/command/run', run)
router.post('/bot/action/join', join)

export default router