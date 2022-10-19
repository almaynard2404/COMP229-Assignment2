//File: index.controller.server.js
//Student Name: Alexander Maynard
//Student ID: 301170707
//Date: 2022-10-01


//exports about page render
export function displayAbout(req, res, next) {
    res.render('index', { title: 'About', page: 'about'} );
};

//exports contact page render
export function displayContact(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact'} );
};

//exports home page render
export function displayHome(req, res, next) {
    res.render('index', { title: 'Home', page: 'home'} );
};

//exports projects page render
export function displayProjects(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects'} );
};


//exports services page render
export function displayServices(req, res, next) {
    res.render('index', { title: 'Services', page: 'services'} );
};


