/*File: users.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-20*/

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: String, 
    password: String, 
    email: String,
}, {
    timestamps: true,
    collection: 'users'
});

export default mongoose.model('Movies', MovieSchema);