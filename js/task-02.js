const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const el1 = document.createElement('li');
el1.classList.add('item');
el1.textContent = ingredients[0];

const el2 = document.createElement('li');
el2.classList.add("item");
el2.textContent = ingredients[1]; 

const el3 = document.createElement("li");
el3.classList.add("item");
el3.textContent = ingredients[2];  

const el4 = document.createElement("li");
el4.classList.add("item");
el4.textContent = ingredients[3];  

const el5 = document.createElement("li");
el5.classList.add("item");
el5.textContent = ingredients[4];  

const el6 = document.createElement("li");
el6.classList.add("item");
el6.textContent = ingredients[5];  

const ingredientsHtml = document.querySelector('#ingredients');
ingredientsHtml.append(el1, el2, el3, el4, el5, el6);
  
