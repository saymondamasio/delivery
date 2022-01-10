import { Request, Response } from 'express'
import { CreateClientUseCase } from './CreateClientUseCase'

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const createClientUseCase = new CreateClientUseCase()

    const client = await createClientUseCase.execute({ password, username })

    return response.json(client)
  }
}
