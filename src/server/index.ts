import { router } from '@/server/trpc'
import { join } from '@/server/bot/join'

export const appRouter = router({
    joinChannel: join
})

export type AppRouter = typeof appRouter