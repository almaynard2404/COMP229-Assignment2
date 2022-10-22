/*File: index.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21-*/


//userDisplayName function to help display certain items if logged in or not. 
//For example: when logged in, nav bar display log out; when logged out, the nav bar 
//shows log in
export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

//function to redirected to login page when trying to access restricted content
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}