
let cars = [];
let faults;
function makeCar(id, brand, model, age){
    let car = [id, brand, model, age];
    faults = Math.random();
    faults = Math.round(faults * 10)/10;
    car.push(faults);
    cars.push(car);
    console.log(cars);
}