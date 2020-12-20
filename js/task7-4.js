const refs = {
  decrementBtnEl: document.querySelector('[data-action="decrement"]'),
  incrementBtnEl: document.querySelector('[data-action="increment"]'),
  counterValueEl: document.querySelector('#value'),
};

let counterValue = Number(refs.counterValueEl.textContent);
refs.decrementBtnEl.addEventListener('click', onDecrementBtnClick);
refs.incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue = 0
    ? (refs.counterValueEl.textContent = counterValue)
    : (refs.counterValueEl.textContent = counterValue -= 1);
}

function onIncrementBtnClick() {
  counterValue += 1;
  refs.counterValueEl.textContent = counterValue;
}
