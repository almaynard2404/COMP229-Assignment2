/*File: /public/content/scripts/app.js
Student Name: Alexander Maynard
Student ID: 301170707
Date: 2022-10-21*/

//strict formatting
"use strict";


//**NOTE: app.js is client functionality. Right now it is for form functionality of the contact.ejs page**


//ensures that all fields are not null and tells the user that all fields must be entered
function mandatoryFields() {
    if (document.getElementById("fname").value == "" || 
    document.getElementById("lname").value == "" || 
    document.getElementById("contact_number").value == "" || 
    document.getElementById("email").value == "" || 
    document.getElementById("business_name").value == "" || 
    document.getElementById("message").value == "") {
        //Message tells the user to enter in all fields to be able to submit page
        //error handling
        document.getElementById("all_fields_error").textContent = "***All fields are mandatory. Please enter all fields***";
        
        //checks if fields are null again. If so it highlights the area with red coloring to show user to enter data into the fields:
        //firstname. lastname, message, and business name.
        if(document.getElementById("fname").value == "")
        {
            document.getElementById("fname").style.backgroundColor = "#FFDCD1";
        }
        if (document.getElementById("lname").value == "")
        {
            document.getElementById("lname").style.backgroundColor = "#FFDCD1";
        }
        if (document.getElementById("message").value == "")
        {
            document.getElementById("message").style.backgroundColor = "#FFDCD1";
        }
        if (document.getElementById("business_name").value == "")
        {
            document.getElementById("business_name").style.backgroundColor = "#FFDCD1";
        }
        if (document.getElementById("email").value == "")
        {
            document.getElementById("email").style.backgroundColor = "#FFDCD1";
        }
        //function returns false to state there are errors for this particular check
        return 0;
    }
    else {
        //changes text back when there are not errors
        //function returns true to state that there are no errors for this particular check
        document.getElementById("all_fields_error").textContent = "";
        return 1;
    }
}


//checks if contact number matches the regular expression and passes validation
function checkNumber() {
    //regular expression for contact number format 111-222-3333
    var numberFormat = /^[1-9]\d{2}-\d{3}-\d{4}/;
    
    if(numberFormat.test(document.getElementById("contact_number").value) == false) {
        //error handling
        document.getElementById("number_error").textContent = "Contact number must be in 111-222-3333 format";
        document.getElementById("contact_number").style.backgroundColor = "#FFDCD1";
        //function returns false to state there are errors for this particular check
        return 0;
    }
    else {
        //changes text and color back when there are not errors
        //function returns true to state that there are no errors for this particular check
        document.getElementById("number_error").textContent = "";
        document.getElementById("contact_number").style.backgroundColor = "white";
        
        return 1;
    }
}

//checks if email matches the regular expression and passes validation
function checkEmail() {
    //regular expression for email format someone@something.domain
    var emailFormat = /^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*@[a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,10})$/;

    if (emailFormat.test(document.getElementById("email").value) == false) {
        //error handling
        //function returns false to state there are errors for this particular check
        document.getElementById("email_error").textContent = "Email must be in the proper someone@something.domain format";
        document.getElementById("email").style.backgroundColor = "#FFDCD1";
        return 0;
    }
    else {
        //changes text and color back when there are not errors
        //function returns true to state that there are no errors for this particular check
        document.getElementById("email_error").textContent = "";
        document.getElementById("email").style.backgroundColor = "white";
        return 1;
    }
}

//calls all functions and checks whether they ALL return 1 (true). If so they all pass validation and the form submits
//and sends a Confirmation/Thank-you message to the user.  
function passedValidation()
{
    if (mandatoryFields() == 1 && 
    checkNumber() == 1 && 
    checkEmail() == 1) {
        document.getElementById("form").submit();
        alert("Thanks for reaching out to me! I will respond within 24-48 hours!");
        //page to go back to on heroku
        window.location.href = "https://comp229-sec401-assignment-1.herokuapp.com/";
    }
    else {
        //if some calls do do not match validaion, else calls the functions and checks which validations are right or wrong.
        mandatoryFields();
        checkNumber();
        checkEmail(); 
    }
}


//clears the form, resets the color and clears all the text when the user wants to reset the form.
function clearForm() {
    document.getElementById("form").reset();
    document.getElementsByTagName("input")[0].style.backgroundColor = "white";
    document.getElementsByTagName("input")[1].style.backgroundColor = "white";
    document.getElementsByTagName("input")[2].style.backgroundColor = "white";
    document.getElementsByTagName("input")[3].style.backgroundColor = "white";
    document.getElementsByTagName("input")[4].style.backgroundColor = "white";
    document.getElementsByTagName("input")[5].style.backgroundColor = "white";
    document.getElementsByTagName("textarea")[0].style.backgroundColor = "white";
    

    document.getElementsByTagName("p")[0].textContent = "";
    document.getElementsByTagName("p")[1].textContent = "";
    document.getElementsByTagName("p")[2].textContent = "";
    document.getElementsByTagName("p")[3].textContent = "";
    document.getElementsByTagName("p")[4].textContent = "";
    document.getElementsByTagName("p")[5].textContent = "";
    document.getElementsByTagName("p")[6].textContent = "";
}


//backwards compatible event handlers
var submit = document.getElementById("send");
var clear = document.getElementById("clear");
if (window.addEventListener) {
    submit.addEventListener("click", passedValidation, false);
    clear.addEventListener("click", clearForm, false);
} 
else if (window.attachEvent)  {
    submit.attachEvent("onclick", passedValidation);
    clear.attachEvent("onclick", clearForm);
}