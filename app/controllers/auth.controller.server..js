//File: auth.controller.server.js
//Student Name: Alexander Maynard
//Student ID: 301170707
//Date: 2022-10-20


//import express
import express from 'express';

//import passport for authentication
import passport from 'passport';

// import UsersModel for authentication
import { UserDisplayName } from '../utils/index.js';



// Display Functions
export function displayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/movie-list');
}


// Processing Function
export function processLoginPage(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if(err){
            console.error(err);
            res.end(err);
        }     
        
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }

            return res.redirect('/');
        })
        
    })(req, res, next);
}


// Display Functions
export function displayBusinessContactsPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/movie-list');
}


// Processing Function
export function processBusinessContactsPage(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if(err){
            console.error(err);
            res.end(err);
        }     
        
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }

            return res.redirect('/');
        })
        
    })(req, res, next);
}


// Display Functions
export function displayUpdatePage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Update', page: 'update', messages: req.flash('updateMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/movie-list');
}


// Processing Function
export function processUpdatePage(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if(err){
            console.error(err);
            res.end(err);
        }     
        
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }

            return res.redirect('/');
        })
        
    })(req, res, next);
}



export function processLogoutPage(req, res, next){
    req.logOut(function(err){
        if(err){
            console.error(err);
            res.end(err);
        }

        console.log("user logged out successfully");
    });

    res.redirect('/login');
}