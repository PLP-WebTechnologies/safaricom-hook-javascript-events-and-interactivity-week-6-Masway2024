// Part 1: Interactive Button to toggle background color
const toggleBgBtn = document.getElementById("toggle-bg-btn");
let isDarkMode = false;

toggleBgBtn.addEventListener("click", () => {
    if (isDarkMode) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "#333";
    }
    isDarkMode = !isDarkMode;
});

// Part 2: Slider with Real-Time Feedback
const textSizeSlider = document.getElementById("text-size-slider");
const dynamicText = document.getElementById("dynamic-text");

textSizeSlider.addEventListener("input", () => {
    dynamicText.style.fontSize = `${textSizeSlider.value}px`;
});

// Part 3: Modal with Event Listeners
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("show-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

showModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Part 4: Form Validation
const userForm = document.getElementById("user-form");
const errorMessage = document.getElementById("error-message");

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let error = "";

    // Name validation (min 3 characters)
    if (name.length < 3) {
        error += "Name must be at least 3 characters long.<br>";
    }

    // Email validation (valid email format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        error += "Please enter a valid email.<br>";
    }

    // Password validation (min 8 chars, 1 uppercase, 1 number)
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        error += "Password must be at least 8 characters long, with at least one uppercase letter and one number.<br>";
    }

    // Display error messages if validation fails
    if (error) {
        errorMessage.innerHTML = error;
    } else {
        errorMessage.innerHTML = "Form submitted successfully!";
        userForm.reset();  // Reset the form
    }
});

// Bonus: Dropdown Menu with Custom Message
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdown-message");

dropdown.addEventListener("change", () => {
    const selectedOption = dropdown.value;
    if (selectedOption === "default") {
        dropdownMessage.innerHTML = "";
    } else {
        dropdownMessage.innerHTML = `You selected ${selectedOption}.`;
    }
});
