const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы']
const ingredientsList = document.querySelector('#ingredients')

ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement('li')
  ingredientsItem.textContent = ingredient
  ingredientsList.appendChild(ingredientsItem)
})
