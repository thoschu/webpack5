import Kiwi from './kiwi.jpg';
import Plan from './plan.png';

const body = document.querySelector('body');

function addImage(imgAlt, imgWidth, imgSrc) {
    const img = document.createElement('img');
    img.alt = imgAlt;
    img.width = imgWidth;
    img.src = imgSrc;

    body.appendChild(img);
}

function createImages() {
    addImage('Kiwi', 256, Kiwi);
    addImage('Plan', 512, Plan)
}

export default createImages;
