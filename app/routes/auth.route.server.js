import {Router} from 'express';
import { displayLoginPage,  
    processLoginPage,
    processLogoutPage } from '../controllers/auth.controller.server.js';

const router = Router();

// Display Login Page
router.get('/login', displayLoginPage);
// Process Login Page
router.post('/login', processLoginPage);

// Process Logout Page
router.get('/logout', processLogoutPage);

export default router;