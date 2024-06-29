import { toUpper } from 'lodash';

import AlertButton from '../alert-button/alert-button.js';
import Header from '../header/header.js';

class HelloPage {
    #textButton;
    static #textHeader = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

    constructor() {
        this.#textButton = 'Bitte klicken...';
    }

    render(){
        const text= toUpper(this.#textButton),
            alertButton = new AlertButton(text),
            header = new Header(HelloPage.#textHeader);

        header.render();
        alertButton.render();
    }
}

export default HelloPage;
