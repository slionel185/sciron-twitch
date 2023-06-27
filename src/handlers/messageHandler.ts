import type { ChatUserstate } from 'tmi.js'

import commandHandler from './commandHandler'

export default async function messageHandler(channel: string , userState: ChatUserstate, message: string, self: boolean) {
    if(self) return
    if(message.startsWith('!')) return commandHandler(channel, userState, message)
}