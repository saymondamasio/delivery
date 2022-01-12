import { Request, Response } from 'express'
import { FindAllDeliveriesDeliverymanUseCase } from './FindAllDeliveriesDeliverymanUseCase'

export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const { client_id } = request

    const findAllDeliveries = new FindAllDeliveriesDeliverymanUseCase()

    const deliveries = await findAllDeliveries.execute(client_id)

    return response.json(deliveries)
  }
}
