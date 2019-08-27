const yumInput = document.querySelector('input[type="text"]');
//input attribute of type text to access them []
const fruitRadio = document.querySelector('#fruit');
const veggieRadio = document.querySelector('#veggie');
const form = document.querySelector('form');
const fruitList = document.querySelector('#fruits');
const veggieList = document.querySelector('#veggies');

form.addEventListener('submit', event => {
  event.preventDefault();//stops page from refreshing
  // console.log(yumInput.value);
  // console.log(fruitRadio.checked);
  //create a list element
  const li = document.createElement('li');
  li.innerHTML = yumInput.value;

  if (fruitRadio.checked) {
    fruitList.appendChild(li);
  }

  if (veggieRadio.checked) {
    veggieList.appendChild(li);
  }
  
});