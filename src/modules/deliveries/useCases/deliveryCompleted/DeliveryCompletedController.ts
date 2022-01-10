import { Request, Response } from 'express'
import { DeliveryCompletedUseCase } from './DeliveryCompletedUseCase'

export class DeliveryCompletedController {
  async handle(request: Request, response: Response) {
    const { delivery_id } = request.params
    const { deliveryman_id } = request

    const deliveryCompleted = new DeliveryCompletedUseCase()

    const delivery = await deliveryCompleted.execute({
      delivery_id,
      deliveryman_id,
    })

    return response.json(delivery)
  }
}
