/*File: business-contacts.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21-*/

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessContactsSchema = new Schema({
    contactName: String, 
    contactNumber: String,
    email: String
}, {
    timestamps: true,
    collection: 'business_contacts'
});

export default mongoose.model('Business_Contacts',  BusinessContactsSchema);