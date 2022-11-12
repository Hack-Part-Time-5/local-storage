let inp_name = document.getElementById('inp_name');
let inp_age = document.getElementById('inp_age');
let inp_city = document.getElementById('inp_city');
let inp_btn = document.getElementById('inp_btn');


console.log(inp_name);

console.log(inp_name, inp_age, inp_city);

let data = []

inp_btn.onclick = () => {
  data.push(
    {
      name: inp_name.value,
      age: inp_age.value,
      city: inp_city.value
    }
  )

  localStorage.setItem('data_person', JSON.stringify(data));

  console.log(localStorage);
}

localStorage.removeItem('data_peso')