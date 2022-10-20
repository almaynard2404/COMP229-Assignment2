/*File: app/app.js
Student Name: Alexander Maynard --> **Example from class
Student ID: 301170707
Date: 2022-10-01*/


/*IMPORTS FOR THE PROJECT*/

// Importing third-Party Modules to the project 
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES Modules fix for __dirname aka "__dirname is not defined"
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
//uncovers metadata to javascript module
const __dirname = dirname(fileURLToPath(import.meta.url));



// Auth Step 1 - import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// Auth Step 2 - defien our auth strategy
let localStrategy = passportLocal.Strategy;

// Auth Step 3 - import the user model
import User from './models/user.js';

// Import Mongoose Module
import mongoose from 'mongoose';







// Configuration Module (secretCode from config.js file)
import { MongoURI, SecretCode } from '../config/config.js';

// Import Routes from index.route.server.js for home, about, contact, projects and services.
import indexRouter from './routes/index.route.server.js'
//import businessContactsRouter from './routes/business-contact.route.server.js';
import authRouter from './routes/auth.route.server.js';










/*app.set and app.use statements for the project*/

// Create instantiate of Express for the project
const app = express();






// Complete the DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//Listen for connection success or error
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));







// Setup ViewEngine EJS to access views to render them into html form to the browser
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));

//body parses for json and url encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//parses cookies
app.use(cookieParser());

//lets you use /public folder static files as if they're in the same folder without having to find /public each time
app.use(express.static(path.join(__dirname,'../public')));

//session specfications
app.use(session({
    secret: SecretCode,
    saveUninitialized: false, 
    resave: false
}));



// Auth Step 5 -  Setup Flash
app.use(flash());

// Auth Step 6 - Initialize Passport and Session
app.use(passport.initialize());
app.use(passport.session());

// Auth Step 7 - Implementing the Auth Strategy
passport.use(User.createStrategy());

// Auth Step 8 - Setup serialization and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// Use Routes (starts with home aka '/')
app.use('/', indexRouter);
//app.use('/', businessContactsRouter);
app.use('/', authRouter);

// Export app for use
export default app;