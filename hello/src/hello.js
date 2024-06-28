import { toUpper } from 'lodash';

import helloWorld from './hello-World.js';
import AlertButton from './components/alert-button/alert-button.js';

const text = toUpper('Bitte klicken...'),
    alertButton = new AlertButton(text);

try {
    helloWorld();
    alertButton.render();
} catch(error) {
    console.error(error);
}
