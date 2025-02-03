import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import bookRoutes from './routes/bookRoutes';
import authRoutes from './routes/authRoutes';

const app = new Koa();
app.use(bodyParser());
app.use(authRoutes.routes()).use(authRoutes.allowedMethods());
app.use(bookRoutes.routes()).use(bookRoutes.allowedMethods());

export default app;
