import { Router } from 'express'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import { AuthenticateClientController } from './modules/accounts/useCases/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { FindAllDeliveriesController } from './modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController'
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { DeliveryCompletedController } from './modules/deliveries/useCases/deliveryCompleted/DeliveryCompletedController'
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController'
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController'

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
  '/clients/my-deliveries',
  ensureAuthenticateClient,
  new FindAllDeliveriesController().handle
)
routes.get(
  '/deliveryman/my-deliveries',
  ensureAuthenticateDeliveryman,
  new FindAllDeliveriesDeliverymanController().handle
)
routes.put(
  '/deliveries/update-deliveryman/:delivery_id',
  ensureAuthenticateDeliveryman,
  new UpdateDeliverymanController().handle
)
routes.put(
  '/deliveries/completed/:delivery_id',
  ensureAuthenticateDeliveryman,
  new DeliveryCompletedController().handle
)
routes.get(
  '/deliveries/available',
  ensureAuthenticateDeliveryman,
  new FindAllAvailableController().handle
)

export { routes }
