import { prisma } from '../../../../database/prismaClient'

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(deliveryman_id: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: deliveryman_id,
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
