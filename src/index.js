import helloWorld from './hello-World.js';
import createImages from './add-image.js';
import AlterButton from './components/alert-button/alert-button.js';

const alertButton = new AlterButton();
alertButton.render();

helloWorld();
createImages();
