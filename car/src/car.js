import { toUpper } from 'lodash';

import Car from './components/car/car.js';
import Header from './components/header/header.js';

try {
    const header = new Header('Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
        golf = toUpper('golf'),
        car = new Car(golf);

    header.render();
    car.render();

    setTimeout(() => {
        const AlertButtonProm= import('HelloWorldApp/AlertButton');

        AlertButtonProm.then((AlertButtonModule) => {
            const AlertButton = AlertButtonModule.default
            const text = toUpper('Click me...'),
                alertButton = new AlertButton(text);

            alertButton.render();
        });
    }, 5000);
} catch (error) {
    console.error(error);
}
