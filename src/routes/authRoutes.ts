import Router from '@koa/router';
import { login } from '../controllers/authController';

const router = new Router();
router.post('/login', login);

export default router;
