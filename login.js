function login() {
    // Get user input
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    // API Key and Database URL
    const API_KEY = "67a366fa8599753f16559cc9";
    const DATABASE_URL = "https://eduhub-d6de.restdb.io/rest/username"; // Adjust the collection name if needed

    // Check if fields are empty
    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password.";
        return;
    }

    // Fetch user data from the database
    fetch(`${DATABASE_URL}?q={"username":"${username}"}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": API_KEY,
            "Cache-Control": "no-cache"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            // User found, check password
            if (data[0].password === password) {
                alert("Login successful!");
                window.location.href = "home.html"; // Redirect to home page
            } else {
                errorMessage.textContent = "Incorrect password!";
            }
        } else {
            errorMessage.textContent = "User not found!";
        }
    })
    .catch(error => console.error("Error:", error));
}
