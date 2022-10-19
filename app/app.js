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

// Configuration Module (secretCode from config.js file)
import { SecretCode } from '../config/config.js';

// Import Routes from index.route.server.js for home, about, contact, projects and services.
import indexRouter from './routes/index.route.server.js'




/*app.set and app.use statements for the project*/

// Create instantiate of Express for the project
const app = express();
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


// Use Routes (starts with home aka '/')
app.use('/', indexRouter);



// Export app for use
export default app;
