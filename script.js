// Javascript to create a pop up box with information text on each cruise
$(document).ready(function() {
    // Attach click event to images with class "image-popup"
    $(".image-popup").click(function() {
    var text = $(this).data("text"); // Get the text associated with the clicked image
    $("#popup-text").text(text); // Set the text in the modal

    // Show the modal
    $("#popup-modal").modal("show");
    });

    // Attach click event to the button inside the modal
    $("#popup-button").click(function() {
    // Redirect to form.html with query parameter
    window.location.href = "form.html"
    });
});


//javascript to validate form input
const email = document.getElementById('email')
const username = document.getElementById('name')
const form = document.getElementById('booking-form')
const number = document.getElementById('number')
const errorElement = document.getElementById('error')
const dropdown = document.getElementById('cruise')
const radioButton = document.querySelectorAll('input[type="radio"]')
const checkbox = document.getElementById('flexCheckDefault')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
    // Prevent default behaviour on submit
    e.preventDefault()
    let messages = []

    // validate there is a name enterred
    if (username.value === '' || username.value == null){
        messages.push('Your Name is Required')
    }

    //remove whitespacing from email address
    var nowhitespace = email.value.trim()
    // validate that a valid email address is entered 
    if(!emailRegex.test(nowhitespace)){
        messages.push('You must enter a valid email address')
    }

    if (isNaN(number)){
        messages.push('Please enter a valid number')
    }

    var selectedOption = dropdown.value;
    if (selectedOption === '') {
        messages.push('Please select a cruise')
    }

    var checked = Array.from(radioButton).some(radio => radio.checked);
    if (!checked) {
        messages.push('Please choose yes or no')
    }

    if (!checkbox.checked){
        messages.push('Please confirm your information')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})