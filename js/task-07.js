const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text')
// console.log(input)
let inputValue = input.value
let sizePx = `${inputValue}px`
span.style.fontSize = sizePx

input.addEventListener('input', e => {
  inputValue = e.target.value
  sizePx = `${inputValue}px`
  span.style.fontSize = sizePx
})
