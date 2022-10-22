/*File: auth.route.server.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21-*/

import {Router} from 'express';
import { displayLoginPage,  
    processLoginPage,
    displayRegisterPage,
    processRegisterPage,
    processLogoutPage } from '../controllers/auth.controller.server.js';

const router = Router();

// Display Login Page
router.get('/login', displayLoginPage);
// Process Login Page
router.post('/login', processLoginPage);

// Display Registration Page
router.get('/register', displayRegisterPage);
// Process Registration page
router.post('/register', processRegisterPage);

// Process Logout Page
router.get('/logout', processLogoutPage);

//export router
export default router;