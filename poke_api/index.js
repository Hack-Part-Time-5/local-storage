let inp_name = document.getElementById('inp_name');
let inp_btn = document.getElementById('inp_btn');

let page = 0;


inp_btn.onclick = () => {
  page = page + 1;
  console.log(page);

  let path = `https://rickandmortyapi.com/api/character/?page=${page}`
  
  next(path)
}

function next (path) {
  fetch(path)
    .then(response => response.json())
    .then(data => {
      let results = data.results

      recorrer_results(results)
      
    })
}

function recorrer_results(array) {
  array.forEach(element => {
    console.log(element);
  })
}


