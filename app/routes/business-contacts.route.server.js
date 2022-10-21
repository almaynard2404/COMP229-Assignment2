/*File: business-contacts.route.server.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21-*/

import { Router } from "express";
import {  displaybusinessContactList, 
    displayUpdatePage, 
    processUpdatePage, 
    processBusinessContactDelete } from "../controllers/business-contacts.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/business-contacts', AuthGuard, displaybusinessContactList);
router.get('/update-business-contacts/:id', AuthGuard,  displayUpdatePage);
router.post('/update-business-contacts/:id', AuthGuard, processUpdatePage);
router.get('/delete-business-contact/:id', AuthGuard, processBusinessContactDelete);

export default router;