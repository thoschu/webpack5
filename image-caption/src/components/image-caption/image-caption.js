import './image-caption.scss';

export default class ImageCaption {
    render(text) {
        const p = document.createElement('p');
        const body = document.querySelector('body');

        p.innerHTML = text;
        p.classList.add('image-caption');

        body.appendChild(p);
    }
}
