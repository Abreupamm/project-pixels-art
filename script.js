const sectionPai = document.getElementById('pixel-board');
const palette = document.querySelectorAll('.color');
const button = document.getElementById('clear-board');
const iptBorder = document.querySelector('#board-size');
const btnGenerate = document.getElementById('generate-board');
const colors = document.getElementById('colors');
const toSaveButton = document.getElementById('to-save');
const buttonMusic = document.getElementById('music');

const myAudio = new Audio('music/o-holy-night-solo-piano-436s-11788.mp3');

function newColor () {
  const cor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
  return cor;
}

function randomColor() {
  const paletteChangeColor = document.getElementsByClassName('change-color');
  for (let i = 0; i < paletteChangeColor.length; i += 1) {
    paletteChangeColor[i].style.backgroundColor = newColor();
  }
};

function changeColor (event) {
  const elementSelected = event.target;
  if (elementSelected.id !== 'black' && elementSelected.id !== 'white') {
    elementSelected.style.backgroundColor = newColor();
  }
};

function pixelFrame(number) {
  for (let index = 1; index <= number; index += 1) {
    const sect = document.createElement('div');
    for (let i = 1; i <= number; i += 1) {
      const frame = document.createElement('div');
      frame.classList.add('pixel');
      sect.appendChild(frame);
    }
    sectionPai.appendChild(sect);
  }
};

function paintColor({target}) {
  const frame = document.querySelector('.selected').style.backgroundColor;
  target.style.backgroundColor = frame;
};

function selected({target: {id}}) {
  const elementSelected = id;
  document.querySelector('.selected').classList.remove('selected');
  document.getElementById(elementSelected).classList.add('selected');
};

function addClickPalette () {
  document.getElementById('black').classList.add('selected');
  const paletteColor = document.getElementsByClassName('color');
  for (let index = 0; index < paletteColor.length; index += 1) {
    const element = paletteColor[index];
    element.addEventListener('click', selected);
    element.addEventListener('dblclick', changeColor);
  }
};

function addColor (qtd) {
  for (let i = 1; i <= qtd; i += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    color.classList.add('change-color');
    color.id = i;
    colors.appendChild(color);
  }
  randomColor();
  addClickPalette();
};

function divColor() {
  const divSelected = document.querySelectorAll('.pixel');
  for (let i = 0; i < divSelected.length; i += 1) {
    const div = divSelected[i];
    div.addEventListener('click', paintColor);
  }
};

function clear() {
  const divs = document.querySelectorAll('.pixel');
  for (let i = 0; i < divs.length; i += 1) {
    divs[i].style.backgroundColor = '';
  }
};

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
};

function pixelBoard() {
  if (iptBorder.value === '' || iptBorder.value < 5) {
    alert('O mínimo é 5!');
  } else if (iptBorder.value > 30) {
    alert('O máximo é 30!');
  } else {
    const newPixel = iptBorder.value;
    sectionPai.innerHTML = '';
    pixelFrame(newPixel);
    qdtColorPalette(newPixel);
  }
  divColor();
};

function toSavePDF() {
  html2canvas(document.querySelector('#pixel-board'), {
    allowTaint: true,
    useCORS: true,
    scale: 1,
  }).then((canvas) => {
    const img = canvas.toDataURL('image/png');
    const doc = new jsPDF();
    doc.setFont('Arial');
    doc.getFontSize(11);
    doc.addImage(img, 'PNG', 7, 13, 195, 105);
    doc.save();
  });
};

function playOrPauseMusic() {
  const audio = myAudio.muted;
  if(audio === true) {
    myAudio.muted = false;
    buttonMusic.src = 'imagens/volume.png'
  } else {
    myAudio.muted = true;
    buttonMusic.src = 'imagens/mute.png'
  }
};

function removePopup() {
  const elementPopUp = document.getElementById('popup');
  elementPopUp.classList.remove('visible');
  elementPopUp.classList.add('invisible');
  myAudio.play();
  myAudio.loop();
}

function popup() {
  const elementPopUp = document.getElementById('popup');
  const buttonPemovePoUp = document.getElementById('removepoup');
  elementPopUp.classList.remove('invisible');
  elementPopUp.classList.add('visible');
  buttonPemovePoUp.addEventListener('click', removePopup);
};

setTimeout(popup, 2000);

addClickPalette();
pixelFrame('5');
divColor();
button.addEventListener('click', clear);
btnGenerate.addEventListener('click', pixelBoard);
toSaveButton.addEventListener('click', toSavePDF);
buttonMusic.addEventListener('click', playOrPauseMusic);

window.html2canvas = html2canvas;
window.jsPDF = window.jspdf.jsPDF;

window.onload = randomColor();


// referencia para gerar cores aleátria : https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript
