import type { ChatUserstate } from 'tmi.js'

import { bot } from '@/bot'
import reply from '@/functions/reply'
import utility from '@/functions/utility'
import getCommandByChannel from '@/functions/getCommandsByChannel'

export default async function commandHandler(channel: string , userState: ChatUserstate, message: string) {
    const channelName = message.split('#')[1]
    const commandName = message.split(' ')[0].split('!')[1]
    const commandSender = userState.username?.toLowerCase()

    const channelCommands = await getCommandByChannel(channelName)

    channelCommands.map(async command => {
        if(channelName === commandSender && !command.active) return await bot.say(channel, 'Command not active!')
        if(!command.active) return
        
        if(command.name.toLowerCase() === commandName.toLowerCase() && command.commandType === 'REPLY') return await reply(channel, command)
        if(command.name.toLowerCase() === commandName.toLowerCase() && command.commandType === 'UTILITY') return await utility(channel, command)
    })
}