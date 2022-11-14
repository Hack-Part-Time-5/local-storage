//recolectar datos mediante un input

let inp_name = document.getElementById('inp_name');
let inp_age = document.getElementById('inp_age');
let inp_city = document.getElementById('inp_city');
let inp_btn = document.getElementById('inp_btn');
let inp_data = document.getElementById('inp_data');
let inp_obj = document.getElementById('inp_obj');

console.log(inp_name);

//cargamos en la consola nuestra base de datos local para observar su funcionamiento

localStorage.setItem('color','blue'); // localStorage(propiedad, asignacion propiedad)
localStorage.setItem('nombre','jhonny');
localStorage.setItem('type_text','arial');

//JSON es un documento tipo texto el cual se basa en el orden de un objeto estructurado en js



//creamos un array para guardar nuestros datos

let data = []

//creamos un evento para añadir mis datos al array data

inp_btn.onclick = () => {
  data.push( 
    {
      name: inp_name.value,
      age: inp_age.value,
      city: inp_city.value
    }
  )

  console.log(data);
  localStorage.setItem('students',JSON.stringify(data));
  
  console.log(localStorage);
}

//usamos un metodo que nos permite tranformar un objeto a un archivo JSON

inp_data.onclick = () => {
  let data_json = JSON.stringify(data)//metodo que me permite pasar de java script a json 
  console.log(data_json);

  tfr_data(data_json)
}

//usamos un metodo que nos permita transformar de un archivo JSON a javascript

function tfr_data(element) {
  let obj = JSON.parse(element);
  console.log('este es tu archivo tranformado de json a js', obj);
}
console.log(localStorage);