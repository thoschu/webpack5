import './alert-text.css';
import './alert-button.scss';

class AlertButton {
    #text = 'Click me';
    person = #{name: 'Tom S.', age: 46, location: 'Germany'};

    constructor() {
        console.log(this.person.name);
    }

    render() {
        const body = document.querySelector('main');
        const button = document.createElement('button');

        button.classList.add('alert-button');
        button.innerHTML = `<span>${this.#text}</span>`;

        button.addEventListener('click', (val) => {
            const text = `Button clicked at: ${val.timeStamp}`;
            const p = document.createElement('p');

            p.classList.add('alert-text');
            p.innerText = text;

            body.appendChild(p);

            alert(text);
        });

        body.appendChild(button);
    }
}

export default AlertButton;
