const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  event.currentTarget.value.length ===
  Number(event.currentTarget.dataset.length)
    ? event.currentTarget.classList.add('valid')
    : event.currentTarget.classList.add('invalid');
}

function onInputFocus(event) {
  event.currentTarget.classList.remove('invalid', 'valid');
}
