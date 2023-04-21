import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const localStorageKey = 'feedback-form-state';


const saveFormState = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}, 500);


form.addEventListener('input', (event) => {
  const { target } = event;
  if (target === emailInput || target === messageInput) {
    saveFormState();
  }
});


const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
  emailInput.value = savedData.email || '';
  messageInput.value = savedData.message || '';
}


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  emailInput.value = '';
  messageInput.value = '';
});
