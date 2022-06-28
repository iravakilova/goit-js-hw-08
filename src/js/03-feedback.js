
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name = "email"]');
const message = document.querySelector('[name = "message"]');
const KEY = "feedback-form-state";

form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput() {
    const user = {
        email: email.value,
        message: message.value,
    };
    localStorage.setItem(KEY, JSON.stringify(user));
}

if (localStorage.getItem(KEY)) {
    user = JSON.parse(localStorage.getItem(KEY));
} else {
    email.value = '';
    message.value = '';
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY)));
    form.reset();
    localStorage.clear();
}