/*File: business-contacts.route.server.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21-*/

import { Router } from "express";
import {  displaybusinessContactList, 
    displayBusinessContacUpdatePage, 
    processBusinessContacUpdatePage, 
    processBusinessContactDelete } from "../controllers/business-contacts.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/business-contacts', AuthGuard, displaybusinessContactList);
router.get('/update-business-contacts/:id', AuthGuard,  displayBusinessContacUpdatePage);
router.post('/update-business-contacts/:id', AuthGuard, processBusinessContacUpdatePage);
router.get('/delete-business-contact/:id', AuthGuard, processBusinessContactDelete);

export default router;