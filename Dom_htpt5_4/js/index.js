let movies__popular = document.getElementById('container__popular');
let movies___tendencies = document.getElementById('container__tendencies');
let movies__see_again = document.getElementById('container__see_again');



let data_popular = [
  {
    nombre: 'spider man',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  }
];

let data_tendencies = [
  {
    nombre: 'hulk',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  ,
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  }
];

let data_see_again = [
  {
    nombre: 'el origen',
    id: 0,
    category: ['accion','comedia'],
    año: 2022,
    img: ''
  },
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  },
  ,
  {
    nombre: '',
    id: 0,
    category: '',
    año: '',
    img: ''
  }
];

let containers = [movies__popular, movies___tendencies, movies__see_again]
let data = [data_popular, data_tendencies, data_see_again]

for (let i = 0; i < data.length; i++) {

  console.log(data[i]);

  data[i].forEach(el => {

    console.log(el.nombre);

    let div_cols = document.createElement('div');
    containers[i].appendChild(div_cols);

    div_cols.innerHTML = `
    <div class="card" style="width: 18rem;">
      
      <div class="card-body">
        <h5 class="card-title"> ${el.nombre} </h5>
        <p class="card-text"> ${el.category} </p>
        <p class="card-text"> ${el.año} </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `
  });
}