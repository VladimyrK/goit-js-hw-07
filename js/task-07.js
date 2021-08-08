const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

input.addEventListener('input', size => {
  const inputValue = size.target.value / 3
  const sizePx = `${inputValue}px`
  span.style.fontSize = sizePx
})
