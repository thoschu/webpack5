import { toUpper } from 'lodash';

import helloWorld from './hello-World.js';
import AlterButton from './components/alert-button/alert-button.js';

const alertButton = new AlterButton(
    toUpper('Bitte klicken...')
);

try {
    if(process.env.NODE_ENV === 'production') {
        helloWorld();
    } else if(process.env.NODE_ENV === 'development') {
        alertButton.render();
    }
} catch(error) {
    console.error(error);
    helloWorld();
    alertButton.render();
}
