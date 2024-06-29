const url = window.location.pathname;

switch(url) {
    case '/car-page':
        const CarPageProm= import('CarApp/CarPage');

        CarPageProm.then((CarPageModule) => {
            const CarPage = CarPageModule.default;
            const carPage = new CarPage();

            carPage.render();
        });
        break;
    case '/hello-page':
        const HelloPageProm= import('HelloWorldApp/HelloPage');

        HelloPageProm.then(HelloPageModule => {
            const HelloPage = HelloPageModule.default;
            const helloPage = new HelloPage();

            helloPage.render();
        });
        break;
    default:
        window.location = 'http://localhost:3000/hello-page';
}
