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

const paleta = document.querySelector('#color-palette'); 
function select(event){
  let ativ = event.target.id;
  let elemento = document.getElementById(ativ);
  elemento.classList = 'selected';
}
