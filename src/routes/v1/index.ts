import { Router } from 'express'

import join from '@/routes/v1/bot/action/join'

const router = Router()

router.use('/bot/action/join', join)

export default router