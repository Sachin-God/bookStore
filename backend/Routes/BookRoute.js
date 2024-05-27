import express from 'express';
import { bookData } from '../Controllers/BookController.js';
const router = express.Router()

router.route('/book').get(bookData);

export default router;