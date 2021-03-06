import { hash } from 'bcrypt'
import { prisma } from '../../../../database/prismaClient'
import { AppError } from '../../../../errors/AppError'

interface ICreateClient {
  username: string
  password: string
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    })

    if (clientExists) {
      throw new AppError('Client already exists')
    }

    const hashPassword = await hash(password, 10)

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    })

    return client
  }
}
