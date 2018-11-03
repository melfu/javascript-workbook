// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
const cars = ['Ford', 'Mazda', 'Toyota', 'Audi']

// Console.log the length of the array.
//console.log(cars.length)

// Create another array called more cars with 4 more different types of cars. The last car type should be Honda
const moreCars = ['Lexus', 'GMC', 'Suburu', 'Honda']

// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
const totalCars = cars.concat(moreCars)
//console.log(totalCars)

// Use the indexOf method to console.log the index of Honda.
//console.log(moreCars.indexOf('Honda'))

// Use the lastIndexOf method to console.log the index of Ford.
//console.log(cars.lastIndexOf('Ford'));

// Use the join method to covert the array totalCars into a string called stringOfCars.
const stringOfCars = totalCars.join();
//console.log(stringOfCars);

// Use the split method to convert stringOfCars back intro an array called totalCarsAlso.
const totalCarsAlso = stringOfCars.split();
console.log(totalCarsAlso);

// Use the reverse method to create an array carsInReverse which is the array totalCarsAlso in reverse.
const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// Use the sort method to put the array carsInReverse into alphabetical order store in a variable carsInReverseAlso.
const carsInReverseAlso = totalCars.sort();
//console.log(carsInReverseAlso);

// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
//const removedCars = carsInReverse.slice()
//console.log(removedCars)

// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and 'Bronco' in their place.
carsInReverse.splice(1,2, 'Bronco')
console.log(carsInReverse)

// Use the push method to add the types of cars that you removed using the splice method, to the carsInReverse array.
carsInReverse.push('Ford', 'GMC')
console.log(carsInReverse)

// Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log(carsInReverse.pop())

// Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log(carsInReverse.shift())

// Use the unshift method to add a new type of car to the array carsInReverse.
console.log(carsInReverse.unshift('BMW'))
console.log(carsInReverse)

// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
const numbers = [23, 45, 0, 2]
const copy = []
numbers.forEach(function(number){
  copy.push(number + 2);
});
console.log(copy)