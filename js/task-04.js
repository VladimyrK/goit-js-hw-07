let counterValue = 0

function increment() {
  counterValue += 1
  counter.textContent = counterValue
}

function decrement() {
  counterValue -= 1
  counter.textContent = counterValue
}
const counter = document.querySelector('#value')
counter.textContent = counterValue

const buttonDecr = document.querySelector('button[data-action="decrement"]')
const buttonIncr = document.querySelector('button[data-action="increment"]')

buttonDecr.addEventListener('click', decrement)
buttonIncr.addEventListener('click', increment)
