// Achievement Pop-up code

document.addEventListener("DOMContentLoaded", function () {
    const claimButtons = document.querySelectorAll(".claim-btn");
    const popup = document.getElementById("achievement-popup");

    claimButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Grey out button & disable it
            button.classList.add("disabled");
            button.textContent = "Claimed";

            // Show achievement popup
            popup.classList.add("active");

            // Hide popup after 3 seconds
            setTimeout(() => {
                popup.classList.remove("active");
            }, 3000);
        });
    });
});
