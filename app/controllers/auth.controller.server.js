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



// Display Function for login page
export function displayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/business-contacts');
}



// Processing Function for login page
export function processLoginPage(req, res, next){
    //authenticate user
    passport.authenticate('local', function(err, user, info) {    
        //if error
        if(err){
            console.error(err);
            res.end(err);
        }     

        //if not a user, display proper error messages and redirect to the login page
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        //if no errors and is a user logIn
        req.logIn(user, function(err){
            //if error logging in display the proper messages 
            if(err){
                console.error(err);
                res.end(err);
            }
            //redirect to bussiness contacts page if successful
            return res.redirect('/business-contacts');
        })
    })(req, res, next);
}


// Display Function for register page
export function displayRegisterPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/business-contacts');
}


// Processing Function for register page
export function processRegisterPage(req, res, next){
    //create new User with fields in the registration page
    let newUser = new User({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });

    //register user with the above User object 
    User.register(newUser, req.body.password, function(err){
        //if user exists, let the user know
        if(err){
            if(err.name == "UserExistsError"){
                console.error('ERROR: User Already Exists!');
                req.flash('registerMessage', 'Registration Error');
            //if server error, let user know
            } else {
                console.error(err.name);
                req.flash('registerMessage', 'Server Error');
            }
            //redirects to register page if there's any error
            return res.redirect('/register');
        }

        //authenticate/ register new user
        return passport.authenticate('local')(req, res, function()
        {
            //after user is authenticated/logged in, redirect them to home page
            return res.redirect('/');
        });
    });
}


// Processing Function for logout  page
export function processLogoutPage(req, res, next){
    //logs out user
    req.logOut(function(err){
        //if error handles the error
        if(err){
            console.error(err);
            res.end(err);
        }
        //message if logged out successfully
        console.log("user logged out successfully");
    });
    //after logged out ridirects to login page
    res.redirect('/login');
}