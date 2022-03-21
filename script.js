function quadroPixels() {
    let quantElement = 5;
    let sectionPai = document.getElementById('pixel-board');
    for(let index = 1; index <= quantElement; index += 1){
        let sect = document.createElement('div');
    for (let i = 1; i <= quantElement; i += 1) {
        let quadro = document.createElement('div');
        quadro.classList.add('pixel', 'white');
        sect.appendChild(quadro);
    }
    sectionPai.appendChild(sect);
    }
}
quadroPixels();

