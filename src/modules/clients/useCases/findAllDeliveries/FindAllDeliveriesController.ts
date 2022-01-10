import { Request, Response } from 'express'
import { FindAllDeliveriesUseCase } from './FindAllDeliveriesUseCase'

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { client_id } = request

    const findAllDeliveries = new FindAllDeliveriesUseCase()

    const deliveries = await findAllDeliveries.execute(client_id)

    return response.json(deliveries)
  }
}
