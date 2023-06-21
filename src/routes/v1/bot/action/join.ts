import type { Request, Response } from 'express'

import { bot } from '@/bot'

export default async function join(req: Request, res: Response) {
    if(!req.body.channel) return res.json({
        error: true,
        message: 'No value found for \'channel\', which is a required variable'
    })

    try {
        await bot.join(req.body.channel)
    } catch(err: any) {
        return res.json({
            error: true,
            message: err.message
        })
    }
}