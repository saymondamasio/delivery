import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { prisma } from '../../../../database/prismaClient'
import { AppError } from '../../../../errors/AppError'

interface IAuthenticateClient {
  username: string
  password: string
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    })

    if (!client) {
      throw new AppError('Username or password invalid')
    }

    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) {
      throw new AppError('Username or password invalid')
    }

    const token = sign({ username }, process.env.JWT_TOKEN!, {
      subject: client.id,
      expiresIn: '1d',
    })

    return { token }
  }
}
