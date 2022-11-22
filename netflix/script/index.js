let search_btn = document.getElementById('search_btn')
let search_inp = document.getElementById('search_inp')
let input_search = document.querySelector('.input_search')
let title_wrapper = document.getElementById('title_wrapper')
let key = ''

console.log(search_btn);

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

let path_popular_movies = 'https://api.themoviedb.org/3/movie/popular?api_key=38758aa5680465c0472c269bc08e22d5'

fetch(path_popular_movies)
  .then(response => response.json())
  .then(data => {
    let popular_movies = data.results

    console.log(popular_movies);

    let num_aleatori = aleatori_movie(popular_movies)

    let random_movie = popular_movies[num_aleatori]

    let random_movie_id = random_movie.id

    let random_movie_id_path = `https://api.themoviedb.org/3/movie/${random_movie_id}/images?api_key=38758aa5680465c0472c269bc08e22d5`
  })


function img_random_movie(path) {
  
}

function aleatori_movie(array) {
  let max_num = array.length;
  let num_aleatori = getRandomArbitrary(0 , max_num);
  num_aleatori = parseInt(num_aleatori)

  return(num_aleatori)
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}