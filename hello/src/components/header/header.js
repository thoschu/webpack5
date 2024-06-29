class Header {
    #text;

    constructor(text = 'n/a') {
        this.#text = text;
    }

    render() {
        const body = document.querySelector('body');
        const h1 = document.createElement('h1');

        h1.innerHTML = `<span>${this.#text}</span>`;

        body.appendChild(h1);
    }
}

export default Header;
