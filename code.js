// code for pop-up

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("imageModal");
    var img = document.querySelector(".timetable-image");
    var modalImg = document.getElementById("enlargedImage");
    var closeBtn = document.querySelector(".close");

    // When the timetable image is clicked, show the modal
    img.addEventListener("click", function () {
        modal.style.display = "flex"; // Show modal
        modalImg.src = this.src; // Set modal image source
    });

    // Close the modal when clicking outside the image or on the close button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});