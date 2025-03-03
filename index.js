const form = document.querySelector('form');
const successMessage = document.querySelector('#successMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Create an object to hold the data
    const formData = new FormData(form);
    // Create an empty object to hold the data
    const data = {};
    // Iterate over the formData object and append each key/value pair to a new FormData object
    formData.forEach((value, key) => {
        // Look at the key of every data element and assign the value to each key.
        data[key] = value;
    });

    let isValid = true;

    // Validate first name
    if (data.firstName === '') {
        document.querySelector('#firstNameContainer .error').innerHTML = 'First name is required';
        isValid = false;
    } else if (data.firstName.length < 2) {
        document.querySelector('#firstNameContainer .error').innerHTML = 'First name must be at least 2 characters';
        isValid = false;
    } else {
        document.querySelector('#firstNameContainer .error').innerHTML = '';
    }

    // Validate Last name
    if (data.lastName === '') {
        document.querySelector('#lastNameContainer .error').innerHTML = 'Last name is required';
        isValid = false;
    } else if (data.lastName.length < 2) {
        document.querySelector('#lastNameContainer .error').innerHTML = 'Last name must be at least 2 characters';
        isValid = false;
    } else {
        document.querySelector('#lastNameContainer .error').innerHTML = '';
    }

    // Validate email
    if (data.email === '') {
        document.querySelector('#emailContainer .error').innerHTML = 'Email is required';
        isValid = false;
    } else if (!data.email.includes('@')) {
        document.querySelector('#emailContainer .error').innerHTML = 'Please enter a valid email address';
        isValid = false;
    } else {
        document.querySelector('#emailContainer .error').innerHTML = '';
    }

    // Validate message
    if (data.message === '') {
        document.querySelector('#messageContainer .error').innerHTML = 'Message is required';
        isValid = false;
    } else {
        document.querySelector('#messageContainer .error').innerHTML = '';
    }

    // Validate consent
    if (!data.consent) {
        document.querySelector('#consentContainer .error').innerHTML = 'You must agree to the terms and conditions';
        isValid = false;
    } else {
        document.querySelector('#consentContainer .error').innerHTML = '';
    }

    // Show success message if all fields are valid
    if (!isValid) {
        successMessage.classList.remove('active');
    } else {
        successMessage.classList.add('active')
        setTimeout(() => {
            successMessage.classList.remove('active');
        }, 5000);
    }
});

