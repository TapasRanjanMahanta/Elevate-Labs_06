const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMsg = document.getElementById("successMsg");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation functions
function validateName() {
  if (nameField.value.trim().length < 3) {
    nameError.style.display = "block";
    nameField.classList.add("invalid");
    nameField.classList.remove("valid");
    return false;
  } else {
    nameError.style.display = "none";
    nameField.classList.add("valid");
    nameField.classList.remove("invalid");
    return true;
  }
}

function validateEmail() {
  if (!emailRegex.test(emailField.value.trim())) {
    emailError.style.display = "block";
    emailField.classList.add("invalid");
    emailField.classList.remove("valid");
    return false;
  } else {
    emailError.style.display = "none";
    emailField.classList.add("valid");
    emailField.classList.remove("invalid");
    return true;
  }
}

function validateMessage() {
  if (messageField.value.trim() === "") {
    messageError.style.display = "block";
    messageField.classList.add("invalid");
    messageField.classList.remove("valid");
    return false;
  } else {
    messageError.style.display = "none";
    messageField.classList.add("valid");
    messageField.classList.remove("invalid");
    return true;
  }
}

// Live validation
nameField.addEventListener("input", validateName);
emailField.addEventListener("input", validateEmail);
messageField.addEventListener("input", validateMessage);

// On submit
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const validName = validateName();
  const validEmail = validateEmail();
  const validMessage = validateMessage();

  if (validName && validEmail && validMessage) {
    successMsg.style.display = "block";
    form.reset();

    [nameField, emailField, messageField].forEach(field => {
      field.classList.remove("valid", "invalid");
    });

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  }
});