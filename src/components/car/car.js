import CarImage from './car.webp';
import './car.scss';

class Car {
    #car;
    #body = document.querySelector('body');
    #img = document.createElement('img');

    constructor(car) {
        this.#car = car;
    }

    render() {
        this.#img.alt = `${this.#car}-image`;
        this.#img.src = CarImage;
        this.#img.title = this.#car;
        this.#img.classList.add('car-image');

       this.#body.appendChild(this.#img);
    }

}

export default Car;
