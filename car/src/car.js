import { toUpper } from 'lodash';

import Car from './components/car/car.js';

const AlertButtonProm = import('HelloWorldApp/AlertButton');

try {
    const golf = toUpper('golf'),
    car = new Car(golf);

    car.render();

    AlertButtonProm.then((AlertButtonModule) => {
        const AlertButton = AlertButtonModule.default
        const text = toUpper('Click me...'),
            alertButton = new AlertButton(text);

        alertButton.render();
    });
} catch (error) {
    console.error(error);
}
