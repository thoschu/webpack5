import Kiwi from './kiwi.jpg';
import Plan from './plan.png';
import Hamburg from './hamburg.svg';

const body = document.querySelector('body');

function addImage(imgAlt, imgWidth, imgSrc) {
    const img = document.createElement('img');
    img.alt = imgAlt;
    img.width = imgWidth;
    img.src = imgSrc;

    body.appendChild(img);
}

function createImages() {
    addImage('kiwi', 256, Kiwi);
    addImage('plan', 512, Plan);
    addImage('hamburg', 1024, Hamburg);
}

export default createImages;
