const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsHtml = document.querySelector("#ingredients");

const markupArray = ingredients.map((el) => {
  const veg = document.createElement("li");
  veg.classList.add("item");
  veg.textContent = el;
  return veg;
});


ingredientsHtml.append(...markupArray);
