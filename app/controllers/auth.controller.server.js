//File: auth.controller.server.js
//Student Name: Alexander Maynard
//Student ID: 301170707
//Date: 2022-10-21


//import express
import express from 'express';

//import passport for authentication
import passport from 'passport';

// need to include the User Model for authentication
import User from '../models/users.js';

// import UsersModel for authentication
import { UserDisplayName } from '../utils/index.js';



// Display Functions
export function displayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/business-contacts');
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

            return res.redirect('/business-contacts');

        })
        
    })(req, res, next);
}


export function displayRegisterPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/business-contacts');
}


export function processRegisterPage(req, res, next){
    let newUser = new User({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, function(err){
        if(err){
            if(err.name == "UserExistsError"){
                console.error('ERROR: User Already Exists!');
                req.flash('registerMessage', 'Registration Error');
            } else {
                console.error(err.name);
                req.flash('registerMessage', 'Server Error');
            }
            
            return res.redirect('/register');
        }

        return passport.authenticate('local')(req, res, function()
        {
            return res.redirect('/');
        });
    });
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