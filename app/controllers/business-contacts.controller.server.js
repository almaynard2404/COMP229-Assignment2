/*File: business-contacts.contoller.server.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21-*/

//import business contact model for use
import businessContactModel from '../models/business-contacts.js';

//import user display name
import { UserDisplayName } from '../utils/index.js';


//display function for Business Contacts Page
export function displayBusinessContactPage(req, res, next){
    //find the business contacts from mongodb atlas
    businessContactModel.find(function(err, businessContactsCollection) {
        //if error, this handles them
        if(err){
            console.error(err);
            res.end(err);
        }
        //renders the business contact page
        res.render('index', {title: 'Business Contacts', page: 'business-contacts', businessContacts: businessContactsCollection, displayName: UserDisplayName(req) });
    })
}


//display function for Update Business Contacts page
export function displayBusinessContacUpdatePage(req, res, next){
    let id = req.params.id;

    //finds a SPECIFIC business contact from mongodb atlas for modification
    businessContactModel.findById(id, (err, businessContact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

    //renders the update business contact page
        res.render('index', { title: 'Update Business Contact', page: 'update-business-contacts', businessContact: businessContact, displayName: UserDisplayName(req) });
    });    
}



// Processing Function for business contact update page
export function processBusinessContacUpdatePage(req, res, next){
    
    //the following assigns fields to current business contact info from mongodb atlas and allow
    //the user to modify them with the input fields on the page


    //creates a new business contact ready for use
    let id = req.params.id;
    
    let newBusinessContact = businessContactModel({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        email: req.body.email
    });

    //updates the business contact with modified(or old/not modified) information
    businessContactModel.updateOne({_id: id }, newBusinessContact, (err, businessContact) => {
        //if error this handles it
        if(err){
            console.error(err);
            res.end(err);
        };

        //redirects to bussiness contacts page
        res.redirect('/business-contacts');
    })
}


// Processing Function for business contact update page
export function processBusinessContactDelete(req, res, next){
    //assigns id field to one we want to remove
    let id = req.params.id;

    //deletes the chosen business contact
    businessContactModel.remove({_id: id}, (err) => {
        //if error this handles it
        if (err){
            console.error(err);
            res.end(err);
        }

        //after delete redirects to business contacts page
        res.redirect('/business-contacts');
    })
}