import type { Command } from '@prisma/client'

import { bot } from '@/bot'

export default async function reply(channel: string, command?: Command, message?: string) {
    if(!command && message) return await bot.say(channel, message)
    if(command && command.commandType === 'REPLY') return await bot.say(channel, command.args[0])
}