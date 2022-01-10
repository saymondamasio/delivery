import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { prisma } from '../database/prismaClient'
import { AppError } from '../errors/AppError'

interface IPayload {
  sub: string
}

export async function ensureAuthenticateDeliveryman(
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
    const { sub: deliveryman_id } = verify(
      token,
      process.env.SECRET_TOKEN_DELIVERYMAN!
    ) as IPayload

    const deliveryman = await prisma.deliveryman.findUnique({
      where: {
        id: deliveryman_id,
      },
    })

    if (!deliveryman) {
      throw new AppError('Deliveryman not found', 401)
    }

    request.deliveryman_id = deliveryman.id

    return next()
  } catch {
    throw new AppError('Invalid token!', 401)
  }
}
