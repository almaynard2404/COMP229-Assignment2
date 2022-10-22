/*File: business-contacts.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21-*/

//import moongoose
import mongoose from 'mongoose';


//declare schema for use
const Schema = mongoose.Schema;

//define create/schema with fields like contactName, contact number & email
const BusinessContactsSchema = new Schema({
    contactName: String, 
    contactNumber: String,
    email: String
}, {
    timestamps: true,
    collection: 'business_contacts'
});

//export business contacts model
export default mongoose.model('Business_Contacts',  BusinessContactsSchema);