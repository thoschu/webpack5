import { toUpper } from 'lodash';

import React from 'react';

import Car from './components/car/car.js';

try {
    const car = new Car(
        toUpper('golf')
    );
    car.render();
} catch (error) {
    console.error(error);
}
