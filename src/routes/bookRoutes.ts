import Router from '@koa/router';
import * as bookController from '../controllers/bookController';
import { authenticate } from '../middleware/auth';

const router = new Router();

router.get('/books', authenticate, bookController.getAllBooks);
router.get('/books/:id', authenticate, bookController.getBookById);
router.post('/books', authenticate, bookController.addBook);
router.delete('/books/:id', authenticate, bookController.deleteBook);

export default router;
