import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessContactsSchema = new Schema({
    name: String, 
    number: String, 
    director: String,
    email: String
}, {
    timestamps: true,
    collection: 'business-contacts'
});
1
export default mongoose.model('Business-Contacts',  BusinessContactsSchema);