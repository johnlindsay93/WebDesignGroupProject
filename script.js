// John: Javascript to create a pop up box with information text on each cruise
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


// John: javascript to validate form input
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

    // validate a number is added
    if (!isNaN(number)){
        messages.push('Please enter a valid number')
    }

    //validate an option was selected
    var selectedOption = dropdown.value;
    if (selectedOption === '') {
        messages.push('Please select a cruise')
    }

    //validate a radio button is clicked
    var checked = Array.from(radioButton).some(radio => radio.checked);
    if (!checked) {
        messages.push('Please choose yes or no')
    }

    //validate a checkbox is checked
    if (!checkbox.checked){
        messages.push('Please confirm your information')
    }

    // if one or more of the above error messages, join together
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})


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
    window.location.href = "form.html?prepopulate=" + encodeURIComponent($("#popup-text").text());
    });
});

/* Conor: Homepage get random trip function */
function getTrip() {
    // Create array of possbile locations
    const locations = [" the Caribbean", "South Ameica", "Southern Europe", "Greece", "the Bahamas", "the Canary Islands", "Alaska", " the Iberian Coastlines", "the South Pacific", "the Mediteranean"];
    // Select random item from array & display on homepage
    let randomLocation = locations[Math.floor(Math.random() * locations.length)];
    document.getElementById("trip").innerHTML = randomLocation;
}

    