// Function 1: Validate Name
function validateName(name) {
    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        return false;
    }
    document.getElementById("nameError").innerText = "";
    return true;
}

// Function 2: Validate Email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        return false;
    }
    document.getElementById("emailError").innerText = "";
    return true;
}

// Function 3: Validate Password
function validatePassword(password) {
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        return false;
    }
    document.getElementById("passwordError").innerText = "";
    return true;
}

// Function 4: Check if Passwords Match
function checkPasswordsMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        return false;
    }
    document.getElementById("confirmPasswordError").innerText = "";
    return true;
}

// Function 5: Validate Phone Number
function validatePhone(phone) {
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must be 10 digits.";
        return false;
    }
    document.getElementById("phoneError").innerText = "";
    return true;
}

// Function 6: Validate Date of Birth
function validateDob(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
        document.getElementById("dobError").innerText = "You must be at least 18 years old.";
        return false;
    }
    document.getElementById("dobError").innerText = "";
    return true;
}

// Function 7: Show Success Message
function showSuccessMessage() {
    document.getElementById("successMessage").innerText = "Registration successful!";
    document.getElementById("successMessage").style.color = "green";
}

// Function to handle form submission
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;

    let valid = true;

    // Validate each field
    if (!validateName(name)) valid = false;
    if (!validateEmail(email)) valid = false;
    if (!validatePassword(password)) valid = false;
    if (!checkPasswordsMatch(password, confirmPassword)) valid = false;
    if (!validatePhone(phone)) valid = false;
    if (!validateDob(dob)) valid = false;

    // If all fields are valid, show success message
    if (valid) {
        showSuccessMessage();
    }
});
