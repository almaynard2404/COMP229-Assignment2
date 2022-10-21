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
router.get('/business-contacts/:id', AuthGuard, processBusinessContactDelete);

export default router;