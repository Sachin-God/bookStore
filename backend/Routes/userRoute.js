import { ContactUs, LoginUser, Register } from "../Controllers/UserController.js";
import express from 'express';

const router = express.Router()

router.route('/register').post(Register);
router.route('/login').post(LoginUser);
router.route('/contact').post(ContactUs);

export default router;