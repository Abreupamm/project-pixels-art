function quadroPixels(numero) {
  const quantElement = numero;
  const sectionPai = document.getElementById('pixel-board');
  for (let index = 1; index <= quantElement; index += 1) {
    const sect = document.createElement('div');
    for (let i = 1; i <= quantElement; i += 1) {
      const quadro = document.createElement('div');
      quadro.classList.add('pixel', 'white');
      sect.appendChild(quadro);
    }
    sectionPai.appendChild(sect);
  }
}
quadroPixels('5');

function selected(event) {
  const elementSelected = event.target.id;
  if (elementSelected !== 'preto') {
    document.getElementById(elementSelected).classList.add('selected');
  }
}
const paleta = document.querySelectorAll('.color');
for (let index = 0; index < paleta.length; index += 1) {
  const element = paleta[index];
  document.getElementById('preto').classList.add('selected');
  element.addEventListener('click', selected);
}
