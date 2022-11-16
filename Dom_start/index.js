let ruta = 'https://raw.githubusercontent.com/astronexus/HYG-Database/master/hygdata_v3.csv';


fetch(ruta)
  .then(response => response.text())
  .then(data => {

    /* creamos las filas de 
    nuestro documento csv utilizando 
    el siguiente metodo */

    let rows = data.split('\n');


    /*creamos las columnas de nuestro
    documento csv utilizando el siguiente
    metodo */

    let cols = rows.map(el => el.split(','))

    /* vamos a filtrar nuestra base de datos
    quitando todas las estrellas que tengan un nombre vacio*/

    let properValue = cols.filter(el => el[6] != '')
    

    /* vamos a crear un array final el cual solo tiene 
    la informacion que necesitamos */

    let array_final = properValue.map(element => {
      return {
        id: element[0],
        name: element[6],
        coordenadas: `x: ${element[17]}, y: ${element[18]}, z: ${element[19]}`
      }
    })

    array_final.shift();
    array_final.pop();

    //muestro mi data en las cards de mi pagina web

    let container_cards = document.getElementById('container_cards')

    array_final.forEach(data => {
      let div = document.createElement('div');
      container_cards.appendChild(div);

      div.innerHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${data.name}  </h5>
          <h6 class="card-subtitle mb-2 text-muted"> ${data.coordenadas} </h6>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      `
    })

    let data_base_json = JSON.stringify(array_final)

    console.log(data_base_json);

  })