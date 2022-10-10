// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "personalform"
    $("#contactForm").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            fullname: {
                required: true,
                minlength: 5
            },
            address: "required",
        
            mobile: { 
                required: true,
            },
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            city: {
                required: true,
            },
            postcode: {
                required: true,
            },
            cardName: {
                required: true,
            },
            cardNum: {
                required: true,
            },
            CVV: {
                required: true,
            },
            checkbox: {
                required: true,
            },
            cardExp: {
                required: true,
            },
            fname: {
                required: true,
            },
            lname: {
                required: true,
            }
        },
        // Specify validation error messages
        messages: {
            fullname:{ 
                required: "<br>Enter your name please",
                minlength: "Minimum length is 5 Characters",
                     },
            address: "Enter your address please",
        
            mobile:"<br>Please enter your mobile number",
            email:{
                required: "<br>Please enter your email address",
            },
            city: {
                required:"Please enter your city."
            },
            postcode:{
                required: "Please enter post code."  
            },
            cardName: {
                required: "Please enter card holder name"  
            },
            cardNum: {
                required: "Please enter card number"  
            },
            
            checkbox: {
                required: "Please indicate that you have read the terms and conditions"
            },
            CVV: {
                required: "Please enter CVV in the back of card"
            },
            cardExp: {
                required: "Please enter exp date by calender icon to the right"
            },
            fname: {
                required: "Please enter your name"
            },
            lname: {
                required: "Please enter your last name"
            },
            
            
        },
        
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
    }
  });
});