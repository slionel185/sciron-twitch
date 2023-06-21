import { z } from 'zod'
import { createEnv } from '@t3-oss/env-core'

export const env = createEnv({
    isServer: true,
    server: {
        PORT: z.string().min(1),
        NODE_ENV: z.enum(['development', 'production']),
        DATABASE_URL: z.string().min(1),
        TWITCH_PASSWORD: z.string()
    },
    runtimeEnv: process.env
})