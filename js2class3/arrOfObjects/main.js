const cars = [
    {
        make: 'Volvo',
        speed: 45,
        color: 'lightYellow',
    },
    {
        make: 'BMW',
        speed: 87,
        color: 'lightBlue',
    },
    {
        make: 'Fiat',
        speed: 78,
        color: 'lightCyan',
    }
];
//create an array of all colors
function carcolor(car){
    return car.color;
}

const carColors = cars.map(carcolor);
console.log(carColors);
//or (in one line)
//const carColors = cars.map(car=>car.color);

// const names=['benjamin', 'keertikha'].map((name)=>{
// return "my name is" +name
// }) 
// console.log(names);

//list the cars that can go above 50(filter)
function carspeed(car){
    return (car.speed>50);
}
const carSpeed = cars.filter(carspeed);
console.log(carSpeed);
//or (in one line)
const fastCars =cars.filter(car => car.speed);
//to print onlyarray of  speed values
const carspeeds = fastCars.map(car =>car.speed);


const fastspeeds = cars.filter

//create a new Array where the cars are sorted by speed(sort)

cars.sort((carA,carB)=>carA.speed-carB.speed)
console.log(cars);


//Add a new field called 'gears' with in each array, where  gears are randomly between 2-5 (i.e, edit the original array)(foreach)

cars.forEach(car => car.gears=4)
//cars.forEach(car =<. car.gears= Math.floor(Math.random()*3)+2);

//find the cars with 5 gears
const fiveGears= cars.filter(car =>car.gears ===5)
console.log(cars);


