import type { Command } from '@prisma/client'

import { bot } from '@/bot'

export default async function forceCommand(channel: string, command: Command) {
    if(command.commandType === 'REPLY') return await bot.say(channel, command.args[0])
}