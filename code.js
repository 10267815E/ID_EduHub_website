// code for pop-up of the timetable img
// Add event listener to listen for these events:
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("imageModal");  // Select the modal pop-up container
    var img = document.querySelector(".timetable-image");   // Select the timetable image that will trigger the modal
    var modalImg = document.getElementById("enlargedImage"); // Select the enlarged image inside the modal
    var closeBtn = document.querySelector(".close");    // Select the close button inside the modal

    // When the timetable image is clicked, show the modal
    img.addEventListener("click", function () {
        modal.style.display = "flex"; // Show modal
        modalImg.src = this.src; // Set modal image source to the clicked img
    });

    // Close the modal when clicking outside the image or on the close button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; //Hides the modal
    });
    // Checks for user clicking outside the enlarged img
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {  // Ensures only clicks outside the modal will close it
            modal.style.display = "none"; // Hides the modal
        }
    });
});