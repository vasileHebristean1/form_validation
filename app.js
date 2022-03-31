var nameError = document.getElementById("name_error");
var phoneError = document.getElementById("phone_error");
var emailError = document.getElementById("email_error");
var messageError = document.getElementById("message_error");
var submitError = document.getElementById("submit_error");

function validateName() {
    var name = document.getElementById("contact_name").value;

    if (name.lenght == 0) {
        nameError.innerHTML = "Please enter your name";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Name is invalid";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById("contact_phone").value;

    if (phone.lenght == 0) {
        phoneError.innerHTML = "Please enter your phone number";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Phone number is invalid";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact_email").value;

    if (email.lenght == 0) {
        emailError.innerHTML = "Please enter your email";
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = "Email is invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact_message").value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = "You have " + left + " characters left";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fill out all fields";
        setTimeout(function () { submitError.style.display = "none"; }, 3000);
        return false;
    }
}