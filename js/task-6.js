function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divCollection = document.querySelector('div#boxes')

console.log(divCollection);

btnCreate.addEventListener('click', handleCreate);
btnDestroy.addEventListener('click', handleDestroy);

function handleCreate(event) { 
  if (1 <= inputNumber && inputNumber <= 100) { 

  }
}

function handleDestroy(event) { 

}

function createBoxes(amount) { 
  const arrCollection = [];
  let count = 0;

while (count < amount) {
  console.log(`Count: ${count}`);
  arrCollection.push();
  count += 1;
}
}