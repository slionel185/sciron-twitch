import type { ChatUserstate } from 'tmi.js'

import forceCommand from '@/functions/forceCommand'
import getCommandByChannel from '@/functions/getCommandsByChannel'

export default async function commandHandler(channel: string , userState: ChatUserstate, message: string) {
    const channelName = message.split('#')[1]
    const commandName = message.split(' ')[0].split('!')[1]

    const channelCommands = await getCommandByChannel(channelName)

    channelCommands.map(command => {
        if(command.name === commandName) return forceCommand(channel, command)
    })
}