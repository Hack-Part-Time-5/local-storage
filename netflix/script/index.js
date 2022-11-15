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

