import * as Router from 'koa-router';
import {routes as calculations} from './modules/calculations/calculations.route';

const routes: Router = new Router();

routes.use('/api', calculations.routes());

export default routes;
