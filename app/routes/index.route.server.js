//File: index.route.server.js
//Student Name: Alexander Maynard
//Student ID: 301170707
//Date: 2022-10-01


//imports routes defined in index.contoller.server.js
import { Router } from "express";
import { displayAbout, 
    displayContact, 
    displayHome, 
    displayProjects, 
    displayServices } from "../controllers/index.controller.server.js";

//Instantiate a const instance of router
const router = Router();


//get for the routes. 
//router.get(browser relative ex: path('/path'), page to get). 
router.get('/', displayHome);
router.get('/home', displayHome);
router.get('/about', displayAbout);
router.get('/projects', displayProjects);
router.get('/services', displayServices);
router.get('/contact', displayContact);

//export to be used by other modules
export default router;