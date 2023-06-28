// Import alias package
if (process.env.NODE_ENV === 'production') require('module-alias/register')

// Import types

// Import packages
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import express from 'express'
import { Client } from 'tmi.js'
import * as trpcExpress from '@trpc/server/adapters/express'

// Import local files
import { env } from '@/utilities/env'
import { appRouter } from '@/server/index'
import { createContext } from '@/server/trpc'
import messageHandler from '@/handlers/messageHandler'

// Create express app
const app = express()

// Allow content types
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Add utilities to express
app.use(cors())
app.use(helmet())
app.use(morgan(env.NODE_ENV === 'development'? 'dev' : 'common'))

// Initialize Twitch bot
export const bot = new Client({
    options: {
        debug: env.NODE_ENV === 'development'
    },
    identity: {
        username: 'ScironBot',
        password: env.TWITCH_PASSWORD
    }
})

bot.connect().catch((err: any) => {
    throw new Error(err)
})

bot.on('message', messageHandler)

// Attatch router to app
app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
}))

// Start express app
app.listen(env.PORT, () => {
    console.log(`Server listening on Port: ${env.PORT}`)
})