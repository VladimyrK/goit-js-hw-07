const input = document.querySelector('#validation-input')
const inputLength = Number(input.dataset.length)
// console.log(inputLength)
input.addEventListener('change', text => {
  const textLength = Number(text.target.value.length)

  if (textLength === inputLength) {
    input.classList.add('valid')
    input.classList.remove('invalid')
  } else {
    input.classList.add('invalid')
    input.classList.remove('valid')
  }
})
