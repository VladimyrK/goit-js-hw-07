const categorie = document.querySelector('#categories')
const categories = categorie.querySelectorAll('.item')
const categoriesLength = categories.length
console.log(`В списке ${categoriesLength} категории`)

categories.forEach(categorie => {
  const title = categorie.querySelector('h2').textContent
  const categorieItems = categorie.querySelectorAll('li')
  const categorieItemsLength = categorieItems.length
  console.log(`-Категория: ${title}`)
  console.log(`-Количество элементов: ${categorieItemsLength}`)
})
