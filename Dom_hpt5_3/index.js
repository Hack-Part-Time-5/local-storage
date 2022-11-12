//punto 1

let title_one = document.querySelector('#title_1');
let title_two = document.getElementById('title_2')
let title_three = document.getElementById('title_3')

title_one.style.color = 'red';
title_two.style.color = 'purple';
title_three.style.color = 'orange';

//punto 2

let btn_event_click = document.getElementById('btn_click');
console.log(btn_event_click);

btn_event_click.addEventListener('click',() => {
  console.log('hola');
});

btn_event_click.onclick = () => {
  alert('hola soy onclick')
};

//punto 3
let star_one = document.getElementById('star_1');
let star_two = document.getElementById('star_2');
let star_three = document.getElementById('star_3');
let star_four = document.getElementById('star_4')
let star_five = document.getElementById('star_5');

star_one.onmouseover = () => {
  star_one.style.color = 'yellow';
}

star_two.onmouseover = () => {
  star_one.style.color = 'yellow';
  star_two.style.color = 'yellow';
}

star_three.onmouseover = () => {
  star_one.style.color = 'yellow';
  star_two.style.color = 'yellow';
  star_three.style.color = 'yellow';
}

star_four.onmouseover = () => {
  star_one.style.color = 'yellow';
  star_two.style.color = 'yellow';
  star_three.style.color = 'yellow';
  star_four.style.color = 'yellow';
}

star_five.onmouseover = () => {
  star_one.style.color = 'yellow';
  star_two.style.color = 'yellow';
  star_three.style.color = 'yellow';
  star_four.style.color = 'yellow';
  star_five.style.color = 'yellow';
}

//onmouse aout event

star_one.onmouseout = () => {
  star_one.style.color = 'black';
}

star_two.onmouseout = () => {
  star_one.style.color = 'black';
  star_two.style.color = 'black';
}

star_three.onmouseout = () => {
  star_one.style.color = 'black';
  star_two.style.color = 'black';
  star_three.style.color = 'black';
}

star_four.onmouseout = () => {
  star_one.style.color = 'black';
  star_two.style.color = 'black';
  star_three.style.color = 'black';
  star_four.style.color = 'black';
}

star_five.onmouseout = () => {
  star_one.style.color = 'black';
  star_two.style.color = 'black';
  star_three.style.color = 'black';
  star_four.style.color = 'black';
  star_five.style.color = 'black';
}

//cuarto punto

let container_family = document.getElementById('container_family');
console.log(container_family);


let people = ['homero','marge','bart','lissa','magie'];

people.forEach(create_child)

function create_child (data) {
  let parrafo = document.createElement('p');
  container_family.appendChild(parrafo);
  parrafo.innerHTML = data;
};

people.forEach(element => {
  let parrafo = document.createElement('p');
  container_family.appendChild(parrafo);
  parrafo.innerHTML = element + 'hola';
});

//quinto 
let container_products = document.getElementById('products_container')

let productos = [
  {
    id: 1,
    name: 'pro_1',
    price: 100,
    store_name: 'store_1',
  },
  {
    id: 2,
    name: 'pro_2',
    price: 200,
    store_name: 'store_2',
  },
  {
    id: 3,
    name: 'pro_3',
    price: 130,
    store_name: 'store_3',
  },
  {
    id: 4,
    name: 'pro_4',
    price: 99,
    store_name: 'store_4',
  }
];



productos.forEach(data => {
  let product = document.createElement('div');
  container_products.appendChild(product);

  product.innerHTML = `
  <div class="card text-center">
    <div class="card-header">
      ${data.name}
    </div>
    <div class="card-body">
      <h5 class="card-title">precio</h5>
      <p class="card-text"> ${data.price} </p>
      <p class="card-text"> ${data.store_name} </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
      2 days ago
    </div>
  </div>
  `
});
