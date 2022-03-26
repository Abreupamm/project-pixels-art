const sectionPai = document.getElementById('pixel-board');
function quadroPixels(numero) {
  for (let index = 1; index <= numero; index += 1) {
    const sect = document.createElement('div');
    for (let i = 1; i <= numero; i += 1) {
      const quadro = document.createElement('div');
      quadro.classList.add('pixel');
      sect.appendChild(quadro);
    }
    sectionPai.appendChild(sect);
  }
}
quadroPixels('5');

function selected(event) {
  const elementSelected = event.target.id;
  document.querySelector('.selected').classList.remove('selected');
  document.getElementById(elementSelected).classList.add('selected');
}

const paleta = document.querySelectorAll('.color');
for (let index = 0; index < paleta.length; index += 1) {
  const element = paleta[index];
  document.getElementById('preto').classList.add('selected');
  element.addEventListener('click', selected);
}

function pintaCor(event) {
  const pixelSelected = event.target;
  const quadro = document.querySelector('.selected').style.backgroundColor;
  pixelSelected.style.backgroundColor = quadro;
}
function divColor() {
  const divSelected = document.querySelectorAll('.pixel');
  for (let i = 0; i < divSelected.length; i += 1) {
    const div = divSelected[i];
    div.addEventListener('click', pintaCor);
  }
}
divColor();

function clear() {
  const divs = document.querySelectorAll('.pixel');
  for (let i = 0; i < divs.length; i += 1) {
    divs[i].style.backgroundColor = '';
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clear);

const iptBorder = document.querySelector('#board-size');
const btnGenerate = document.getElementById('generate-board');

function pixelBoard() {
  if (iptBorder.value === '' || iptBorder.value < 5) {
    alert('Board inválido!');
  } else if (iptBorder.value > 50) {
    const novo = '50';
    sectionPai.innerHTML = '';
    quadroPixels(novo);
  } else {
    const novo = iptBorder.value;
    sectionPai.innerHTML = '';
    quadroPixels(novo);
  }
  divColor();
}
btnGenerate.addEventListener('click', pixelBoard);

window.onload = function corAleatoria() {
  const paleta = document.getElementsByClassName('mudaCor');
  for (let i = 0; i < paleta.length; i += 1) {
    const cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    const p = paleta[i];
    p.style.backgroundColor = cor;
  }
};

// referencia para gerar cores aleátria : https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript
