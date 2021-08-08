const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
span.textContent = 'незнакомец'

input.addEventListener('input', string => {
  span.textContent = string.target.value
  if (string.target.value === '') {
    span.textContent = 'незнакомец'
  }
})
