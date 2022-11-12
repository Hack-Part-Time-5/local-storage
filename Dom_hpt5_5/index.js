let btn = document.getElementById('btn')
let btn_2 = document.getElementById('btn_2')
let btn_3 = document.getElementById('btn_3')
let btn_4 = document.getElementById('btn_4')

let data_base = [];

function imprimir(array) {
  array.forEach(element => {
    let li_students = document.getElementById('li_std');

    let li = document.createElement('li')

    li_students.appendChild(li)

    li.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Nombre: ${element.name} </p>
        <p class="card-text">Edad: ${element.age} </p>
        <p class="card-text">Ciudad: ${element.city}  </p>
      </div>
    </div>
    `;
  });
}

function create_data() {
  let name = prompt('Ingrese el nombre del estudiante');
  let edad = prompt('Ingrese la edad del estudiante');
  let ciudad = prompt('ciudad del estudiante');

  data_base.push(
    {
      name: name,
      age: edad,
      city: ciudad
    }
  )
  
  console.log(localStorage);

  localStorage.setItem('students', JSON.stringify(data_base))
}

btn.onclick = () => {
  
  
  create_data()

  console.log(data_base);
}

btn_2.onclick = () => {
  console.log(localStorage);
}

btn_3.onclick = () => {
  localStorage.clear()
}

let data_base_2 = localStorage.getItem('students');
data_base_2 = JSON.parse(data_base_2);

imprimir(data_base_2)
