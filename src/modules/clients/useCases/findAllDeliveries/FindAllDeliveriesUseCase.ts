import { prisma } from '../../../../database/prismaClient'

export class FindAllDeliveriesUseCase {
  async execute(client_id: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: client_id,
      },
      select: {
        username: true,
        id: true,
        deliveries: true,
      },
    })

    return deliveries
  }
}
