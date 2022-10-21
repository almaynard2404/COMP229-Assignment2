/*File: users.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21*/

import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';
const { PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    displayName: String,
    username: String,
    emailAddress: String
},{
    timestamps: true,
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);