import { prisma } from '../../../../database/prismaClient'

interface IDeliveryCompleted {
  delivery_id: string
  deliveryman_id: string
}

export class DeliveryCompletedUseCase {
  async execute({ delivery_id, deliveryman_id }: IDeliveryCompleted) {
    const delivery = await prisma.deliveries.updateMany({
      where: {
        id: delivery_id,
        deliveryman_id,
      },
      data: {
        end_at: new Date(),
      },
    })

    return delivery
  }
}
