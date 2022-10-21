/*File: business-contacts.contoller.server.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21-*/

import businessContactModel from '../models/business-contacts.js';

import { UserDisplayName } from '../utils/index.js';

export function displaybusinessContactList(req, res, next){
    businessContactModel.find(function(err, businessContactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Business Contacts', page: 'business-contacts', businessContacts: businessContactsCollection, displayName: UserDisplayName(req) });
    })
}



export function displayBusinessContacUpdatePage(req, res, next){
    let id = req.params.id;

    businessContactModel.findById(id, (err, businessContact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Update Business Contact', page: 'update-business-contacts', businessContact: businessContact, displayName: UserDisplayName(req) });
    });    
}



export function processBusinessContacUpdatePage(req, res, next){
    let id = req.params.id;
    
    let newBusinessContact = businessContactModel({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        email: req.body.email
    });

    businessContactModel.updateOne({_id: id }, newBusinessContact, (err, businessContact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/business-contacts');
    })
}



export function processBusinessContactDelete(req, res, next){
    let id = req.params.id;

    businessContactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/business-contacts');
    })
}