import { prisma } from '../../../../database/prismaClient'

interface IUpdateDelivery {
  delivery_id: string
  deliveryman_id: string
}

export class UpdateDeliverymanUseCase {
  async execute({ deliveryman_id, delivery_id }: IUpdateDelivery) {
    const delivery = await prisma.deliveries.update({
      where: {
        id: delivery_id,
      },
      data: {
        deliveryman_id,
      },
    })

    return delivery
  }
}
