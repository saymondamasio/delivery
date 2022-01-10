import { Router } from 'express'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import { AuthenticateClientController } from './modules/accounts/useCases/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'

const routes = Router()

routes.post('/clients', new CreateClientController().handle)
routes.post('/deliveryman', new CreateDeliverymanController().handle)
routes.post('/auth/clients', new AuthenticateClientController().handle)
routes.post('/auth/deliveryman', new AuthenticateDeliverymanController().handle)
routes.post(
  '/delivery',
  ensureAuthenticateClient,
  new CreateDeliveryController().handle
)
routes.get(
  '/deliveries/available',
  ensureAuthenticateDeliveryman,
  new FindAllAvailableController().handle
)

export { routes }
