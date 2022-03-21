function quadroPixels() {
    let quantElement = 5;
    let totaElement = quantElement * quantElement;
    let sectionPai = document.getElementById('pixel-board');
        for (let i = 1; i <= totaElement; i += 1) {
            let quadro = document.createElement('div');
            quadro.classList.add('pixel', 'white');
            sectionPai.appendChild(quadro);
        }
    
}
quadroPixels();