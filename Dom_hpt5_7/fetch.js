//creo una variable para guardar mi ruta

let path = 'https://rickandmortyapi.com/api/character/?page=19'



fetch(path)
  .then(response => response.json()) //nos aseguramos que el archivo resivido por mi peticion sea tipo JSON
  .then(data => {

    console.log('muestro la informacion traida de mi peticion',data);
    console.log('de mi objeto principal extrajimos solo los resultados',data.results);

    let data_results = data.results;

    let vivos = [];

    data_results.forEach(element => {
      if (element.status == 'Alive' && element.species == 'Human') {
        vivos.push(element)
      }
    })

    
    console.log('creamos un filtro a nuestros resultados para crear un array solo con los personajes vivos',vivos);
  })




