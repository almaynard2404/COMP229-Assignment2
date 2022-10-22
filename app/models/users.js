/*File: users.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21*/


//import moongoose
import mongoose from "mongoose";


import passportLocalMongoose from 'passport-local-mongoose';

//declare schema for use
const { PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

//define create/schema with fields like displayName, username emailAddress 
//(login info will be added when user registers for an account)
const UserSchema = new Schema({
    displayName: String,
    username: String,
    emailAddress: String
},{
    timestamps: true,
    collection: 'users'
});

//plugin userSchema for use with passport for authentication
UserSchema.plugin(passportLocalMongoose);

//export user model
export default mongoose.model('User', UserSchema);