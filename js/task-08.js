let value = 0
const input = document.querySelector('[type="number"]')
input.addEventListener('input', number => {
  value = number.target.value
})

const buttonRender = document.querySelector('[data-action="render"]')
const buttonDestroy = document.querySelector('[data-action="destroy"]')
const box = document.querySelector('#boxes')

buttonRender.addEventListener('click', createBoxes)
buttonDestroy.addEventListener('click', destroyBoxes)
let size = 30

function createBoxes() {
  for (let i = 0; i < value; i += 1) {
    const div = document.createElement('div')
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
    box.appendChild(div)
    size = size + 10
  }
}

function destroyBoxes() {
  while (box.firstChild) {
    box.removeChild(box.firstChild)
  }
  size = 30
  input.value = ''
  value = 0
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}
