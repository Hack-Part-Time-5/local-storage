let container = document.querySelector('.container');
let cuadrado = document.querySelector('.cuadrado');
let btn_vertical = document.querySelector('.btn_vertical');
let btn_horizontal = document.querySelector('.btn_horizontal');
let btn_reiniciar = document.querySelector('.btn_reiniciar');
let btn_inicio = document.querySelector('.btn_inicio');
let div = document.createElement('div');
let cont_y = 0;
let cont_x = 0;
let tecla = Event.keyCode;

console.log(tecla);

cuadrado.onkeydown = () => {
  vertical()
} 

console.log(btn_vertical, btn_horizontal, btn_reiniciar);

cuadrado.onmouseover = () => {
  cuadrado.style.backgroundColor = 'black';
}



btn_inicio.onclick = () => {
  
  cuadrado.appendChild(div);

  div.style.width = '100px';
  div.style.height = '100px';

  div.style.backgroundColor = 'purple'
}

btn_vertical.onclick = () => {
  vertical()
}

btn_horizontal.onclick = () => {
  if (cont_x < 200) {
    cont_x += 100;
  }

  div.style.position = 'absolute';
  div.style.left = `${cont_x}`+'px';
}

btn_reiniciar.onclick = () => {
  div.style.backgroundColor = 'transparent'
  div.style.top = '10px';
  div.style.left = '10px';
  cont_y = 0;
  cont_x = 0;
}

function vertical() {
  if (cont_y < 200) {
    cont_y += 100;
  }

  div.style.position = 'absolute';
  div.style.top = `${cont_y}`+'px';
}





