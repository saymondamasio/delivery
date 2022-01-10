import { Request, Response } from 'express'
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase'

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const authenticateClient = new AuthenticateClientUseCase()

    const { token } = await authenticateClient.execute({ username, password })

    return response.json({ token })
  }
}
