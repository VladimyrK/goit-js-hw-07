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

function createBoxes() {
  let size = 30
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
  for (let i = 0; i < value; i += 1) {
    const div = box.querySelector('div')
    box.removeChild(div)
  }
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}
