// Achievement Pop-up code

document.addEventListener("DOMContentLoaded", function () {
    const claimButtons = document.querySelectorAll(".claim-btn");  // Select all "Claim" buttons
    const popup = document.getElementById("achievement-popup");  // Select the achievement pop-up element

    claimButtons.forEach(button => {   // Loop through each "Claim" button
        button.addEventListener("click", function () {
           // Disable the button and change text to "Claimed"
            button.classList.add("disabled"); // Adds a class to visually disable the button
            button.textContent = "Claimed"; // Updates button text

            // Show achievement popup
            popup.classList.add("active"); // Adds class to make pop-up visible

            // Hide popup after 3 seconds
            setTimeout(() => {
                popup.classList.remove("active"); // Removes class to hide pop-up
            }, 3000);
        });
    });
});
