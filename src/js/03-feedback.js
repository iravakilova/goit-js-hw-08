import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form'); 
const KEY = "feedback-form-state";

let user = {
    email: '',
    message: '',
}

if (localStorage.getItem(KEY)) {
    user = JSON.parse(localStorage.getItem(KEY));
}

form.querySelector('[name="email"]').value = user.email;
form.addEventListener('input', throttle(onInput, 500));
function onInput(event) {
    user[event.target.name] = event.target.value;
    localStorage.setItem(KEY, JSON.stringify(user));
}

form.querySelector('[name="message"]').value = user.message;
form.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY)));
    localStorage.clear();
    event.target.reset();
    user.email = '';
    user.message = '';
}