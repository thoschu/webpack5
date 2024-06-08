import Car from './components/car/car.js';

try {
    const car = new Car('golf');
    car.render();
} catch (error) {
    console.error(error);
}
