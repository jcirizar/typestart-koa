import {addition, logger} from './calculations.controller';
import * as Router from 'koa-router';

const routes: Router = new Router();

routes
  .get('/addition', logger, addition);

export {routes};
