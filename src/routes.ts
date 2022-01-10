import { Router } from 'express'
import { AuthenticateClientController } from './modules/accounts/useCases/authenticateClient/AuthenticateClientController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'

const routes = Router()

routes.post('/clients', new CreateClientController().handle)
routes.post('/sessions', new AuthenticateClientController().handle)

export { routes }
