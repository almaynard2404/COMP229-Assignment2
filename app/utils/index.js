/*File: index.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21-*/

export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}