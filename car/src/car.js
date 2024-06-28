import { toUpper } from 'lodash';

import Car from './components/car/car.js';

try {
    const golf = toUpper('golf'),
    car = new Car(golf);

    car.render();
} catch (error) {
    console.error(error);
}
