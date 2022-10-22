/*File: business-contacts.route.server.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21-*/

//import express
import { Router } from "express";
//import business, update and delete functions
import {  displayBusinessContactPage, 
    displayBusinessContacUpdatePage, 
    processBusinessContacUpdatePage, 
    processBusinessContactDelete } from "../controllers/business-contacts.controller.server.js";

//import authguard (for authentication)
import { AuthGuard } from "../utils/index.js";

//create router
const router = Router();

//get for business contacts page, this is protected with login and is enforced by AuthGuard
router.get('/business-contacts', AuthGuard, displayBusinessContactPage);
//get for update business contact page, this is protected with login and is enforced by AuthGuard
//uses id as well to get the right business contact for the update
router.get('/update-business-contacts/:id', AuthGuard,  displayBusinessContacUpdatePage);
//post for update business contact page, this is protected with login and is enforced by AuthGuard
//uses id as well to get the right business contact when updated
router.post('/update-business-contacts/:id', AuthGuard, processBusinessContacUpdatePage);
//get for delete business contact function, this is protected with login and is enforced by AuthGuard
//uses id as well to get the right business contact to delete
router.get('/delete-business-contact/:id', AuthGuard, processBusinessContactDelete);

//export router
export default router;