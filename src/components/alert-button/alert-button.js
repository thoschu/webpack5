import './alert-button.css';

class AlertButton {
    #text = 'Click me';

    render() {
        const body = document.querySelector('body');
        const button = document.createElement('button');

        button.classList.add('alert-button');
        button.innerHTML = `<span>${this.#text}</span>`;
        button.addEventListener('click', (val) => {
            const text = `Button clicked at: ${val.timeStamp}`;
            const p = document.createElement('p');

            p.classList.add('alert-button-text');
            p.innerText = text;

            body.appendChild(p);

            alert(text);
        });

        body.appendChild(button);
    }
}

export default AlertButton;
