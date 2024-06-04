import Kiwi from './kiwi.jpg';
import Plan from './plan.png';

function addImage() {
    const imgKiwi = document.createElement('img');
    imgKiwi.alt = 'Kiwi';
    imgKiwi.width = 256;
    imgKiwi.src = Kiwi;
    const body = document.querySelector('body');
    body.appendChild(imgKiwi);

    const imgPlan = document.createElement('img');

    imgPlan.alt = 'Kiwi';
    imgPlan.width = 512;
    imgPlan.src = Plan;

    body.appendChild(imgPlan);
}

export default addImage;
