
const items = document.querySelectorAll("#categories .item");
const categories = [...items];
console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
})
