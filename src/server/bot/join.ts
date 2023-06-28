import { z } from 'zod'
import { publicProcedure } from '@/server/trpc'

import { bot } from '@/bot'

export const join = publicProcedure
    .input(
        z.object({
            channelname: z.string().min(1)
        })
    )
    .query(async (opts) => {
        try {
            await bot.join(opts.input.channelname)
            return {
                error: false,
                message: 'Joined chat!'
            }
        } catch(err: any) {
            return {
                error: true,
                message: err.message
            }
        }
    })