// Code for drop-down text box for FAQ page

// Wait until the document has fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq-question");
    // Select all FAQ question elements (which act as buttons)
    faqButtons.forEach(button => {
        button.addEventListener("click", function () {  // Add a click event listener to each FAQ question
            const answer = this.nextElementSibling;  // Get the corresponding answer (the next sibling element)
            this.classList.toggle("active");   // Toggle the "active" class to visually indicate the button is expanded/collapsed

            if (answer.style.display === "block") {
                answer.style.display = "none";   // If the answer is visible, hide it
            } else {
                answer.style.display = "block";  // Otherwise, show answer
            }
        });
    });
});
