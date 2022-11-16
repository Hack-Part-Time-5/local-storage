let search_btn = document.getElementById('search_btn')
let search_inp = document.getElementById('search_inp')
let input_search = document.querySelector('.input_search')

console.log(input_search);

function outsideClick(event, search_btn)	{
  var clickedOut = true;

  if (event.target == search_btn || search_btn.contains(event.target)) {
    clickedOut = false;
  }

  if (clickedOut) return true;
  else return false;
}

window.addEventListener('click', function(e) {
  if (outsideClick(e, search_btn)) {
    search_inp.style.display = 'none';
    input_search.classList.remove('input_search_active')
  }
});

search_btn.onclick = () => {
  search_inp.style.display = 'block';
  input_search.classList.add('input_search_active')
}

function create (array, padre) {
  array.forEach (dato => {
    let zona_pelis = document.querySelector(padre);
  
    let div_cols = document.createElement('div');
  
    zona_pelis.appendChild(div_cols);
  
    div_cols.style.width = 'auto';
  
    div_cols.innerHTML = `
      <div class="card mb-3 me-3" style="width: 18rem;">
        <img id="num${dato.id}" src="${dato.img}" class="card-img-top img_tamaño" alt="...">
        <div class="card-body ocultar">
          <h5 class="card-title">${dato.nombre}</h5>
          <p class="card-text">${dato.categoria}</p>
          <p class="card-text">año: ${dato.año}</p>
          <p class="card-text"> ${dato.descripcion}</p>
          <a href="#" class="btn btn-primary">See movie</a>
        </div>
      </div>
    `
  })
}