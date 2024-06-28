import { toUpper } from 'lodash';

import helloWorld from './hello-World.js';
import AlterButton from './components/alert-button/alert-button.js';

const text = toUpper('Bitte klicken...'),
    alertButton = new AlterButton(text);

try {
    helloWorld();
    alertButton.render();
} catch(error) {
    console.error(error);
}
