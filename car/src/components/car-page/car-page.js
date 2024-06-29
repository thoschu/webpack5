import { toUpper } from 'lodash';

import Header from '../header/header.js';
import Car from '../car/car.js';

class CarPage {
    static #text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

    render() {
        try {
            const header = new Header(CarPage.#text),
                golf = toUpper('golf'),
                car = new Car(golf);

            header.render();
            car.render();

        } catch (error) {
            console.error(error);
        }
    }
}

export default CarPage;
