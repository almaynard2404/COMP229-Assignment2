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

export default mongoose.model('Business-Contacts',  BusinessContactsSchema);