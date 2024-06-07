import helloWorld from './hello-World.js';
import createImages from './add-image.js';
import AlterButton from './components/alert-button/alert-button.js';

const alertButton = new AlterButton();

try {
    if(process.env.NODE_ENV === 'production') {
        helloWorld();
    } else if(process.env.NODE_ENV === 'development') {
        alertButton.render();
    }
} catch (error) {
    console.error(error);
    createImages();
}
