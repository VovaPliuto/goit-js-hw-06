const listOfLiItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${listOfLiItems.length}`);

console.log("");

listOfLiItems.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);

  console.log(`Elements: ${elem.querySelectorAll('li').length}`);

  console.log("");
});