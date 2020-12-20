const refs = {
  input: document.querySelector('#name-input'),
  name: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value.length > 0
    ? (refs.name.textContent = event.currentTarget.value)
    : (refs.name.textContent = 'незнакомец');
}
