/*File: users.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-20*/

import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
const { PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: String, 
    password: String, 
    email: String,
}, {
    timestamps: true,
    collection: 'users'
});

UsersSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UsersSchema);