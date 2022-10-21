//File: index.controller.server.js
//Student Name: Alexander Maynard
//Student ID: 301170707
//Date: 2022-10-20

//import username for authentication on each page
import { UserDisplayName } from "../utils/index.js";


//exports about page render
export function displayAbout(req, res, next) {
    res.render('index', { title: 'About', page: 'about', displayName: UserDisplayName(req) } );
};

//exports contact page render
export function displayContact(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req) } );
};

//exports home page render
export function displayHome(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) } );
};

//exports projects page render
export function displayProjects(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', displayName: UserDisplayName(req) } );
};


//exports services page render
export function displayServices(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: UserDisplayName(req) } );
};



