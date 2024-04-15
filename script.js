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
    