import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { prisma } from '../database/prismaClient'
import { AppError } from '../errors/AppError'

interface IPayload {
  sub: string
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authorizationHeader = request.headers.authorization

  if (!authorizationHeader) {
    throw new AppError('JWT token is missing', 401)
  }

  const [, token] = authorizationHeader.split(' ')

  try {
    const { sub: client_id } = verify(
      token,
      process.env.SECRET_TOKEN_CLIENT!
    ) as IPayload

    const client = await prisma.clients.findUnique({
      where: {
        id: client_id,
      },
    })

    if (!client) {
      throw new AppError('Client not found', 401)
    }

    request.client_id = client.id

    return next()
  } catch {
    throw new AppError('Invalid token!', 401)
  }
}
