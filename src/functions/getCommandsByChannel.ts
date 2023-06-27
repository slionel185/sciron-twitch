import { prisma } from '@/utilities/prisma';

export default async function getCommandByChannel(channel: string) {
    const user = await prisma.user.findFirst({
        where: {
            name: {
                equals: channel,
                mode: 'insensitive'
            }
        },
        include: {
            Command: true
        }
    })

    if(user) return user.Command
    return []
}