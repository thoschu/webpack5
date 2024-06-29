import HelloPage from './components/hello-page/hello-page.js';

try {
    const helloPage = new HelloPage();

    helloPage.render();
} catch (error) {
    console.error(error);
}
