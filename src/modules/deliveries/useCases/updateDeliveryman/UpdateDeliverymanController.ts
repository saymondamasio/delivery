import { Request, Response } from 'express'
import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase'

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { deliveryman_id } = request

    const { delivery_id } = request.params

    const updateDelivery = new UpdateDeliverymanUseCase()

    const delivery = await updateDelivery.execute({
      delivery_id,
      deliveryman_id,
    })

    return response.json(delivery)
  }
}
