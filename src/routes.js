import { Router } from 'express';

import UserController  from './controllers/UserController';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/register', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;