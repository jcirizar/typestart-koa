import * as Koa from 'koa';
import routes from './routes';

const app = new Koa();
const port = process.env.PORT || 9000;

app
  .use(routes.routes())
  .use(routes.allowedMethods())
  .listen(port, () => console.log(`Listening on port ${port}`));

export default app;