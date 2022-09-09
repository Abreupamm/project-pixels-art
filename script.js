const sectionPai = document.getElementById('pixel-board');
const paleta = document.querySelectorAll('.color');
const button = document.getElementById('clear-board');
const iptBorder = document.querySelector('#board-size');
const btnGenerate = document.getElementById('generate-board');
const myAudio = document.getElementById('audio');
const colors = document.getElementById('colors');

function newColor () {
  const cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
  return cor;
}

function corAleatoria() {
  const paleta = document.getElementsByClassName('mudaCor');
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].style.backgroundColor = newColor();
  }
};

function trocaCor (event) {
  const elementSelected = event.target;
  if (elementSelected.id !== 'preto' && elementSelected.id !== 'branco') {
    elementSelected.style.backgroundColor = newColor();
  }
}

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

function pintaCor({target}) {
  const pixelSelected = target;
  const quadro = document.querySelector('.selected').style.backgroundColor;
  target.style.backgroundColor = quadro;
}

function selected({target: {id}}) {
  const elementSelected = id;
  document.querySelector('.selected').classList.remove('selected');
  document.getElementById(elementSelected).classList.add('selected');
}

function addClickPalette () {
  document.getElementById('preto').classList.add('selected');
  const paletteColor = document.getElementsByClassName('color');
  for (let index = 0; index < paletteColor.length; index += 1) {
    const element = paletteColor[index];
    element.addEventListener('click', selected);
    element.addEventListener('dblclick', trocaCor);
  }
}

function addColor (qtd) {
  for (let i = 1; i <= qtd; i += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    color.classList.add('mudaCor');
    color.id = i;
    colors.appendChild(color);
  }
  corAleatoria();
  addClickPalette();
}

function divColor() {
  const divSelected = document.querySelectorAll('.pixel');
  for (let i = 0; i < divSelected.length; i += 1) {
    const div = divSelected[i];
    div.addEventListener('click', pintaCor);
  }
}

function clear() {
  const divs = document.querySelectorAll('.pixel');
  for (let i = 0; i < divs.length; i += 1) {
    divs[i].style.backgroundColor = '';
  }
}

function qdtColorPalette (number) {
  const colors = document.getElementById('colors');
  colors.innerHTML = '';
if (number >= 15 && number < 20) {
    addColor(6);
} else if (number >= 20 && number < 25) {
    addColor(8);
} else if (number >= 25) {
    addColor(12);
} else {
  addColor(4);
}
}

function pixelBoard() {
  if (iptBorder.value === '' || iptBorder.value < 5) {
    alert('O mínimo é 5!');
  } else if (iptBorder.value > 30) {
    alert('O máximo é 30!');
  } else {
    const novo = iptBorder.value;
    sectionPai.innerHTML = '';
    quadroPixels(novo);
    qdtColorPalette(novo);
  }
  divColor();
}

addClickPalette();
quadroPixels('5');
divColor();
button.addEventListener('click', clear);
btnGenerate.addEventListener('click', pixelBoard);

window.onload = corAleatoria();

// referencia para gerar cores aleátria : https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript
