const allItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItems.length}`);
console.log(`Categories: ${allItems.firstElementChild}`);
const firstEl = allItems.lastElementChild;
console.log(allItems.lastElementChild);
allItems.forEach(items => {
    console.log(items);
    // console.log(items.length);
  console.log(`Categories: ${items.childNodes}`);
});