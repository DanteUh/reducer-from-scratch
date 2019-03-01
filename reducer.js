// Array object Reducer

// We want to add the total population of the objects
const objArray = [
  {
    country: 'Sweden',
    population: 9995000
  },
  {
    country: 'USA',
    population: 325700000
  },
  {
    country: 'Japan',
    population: 126800000
  },
  {
    country: 'Great Brittan',
    population: 65130000
  }
];

// We want this array to be flatten
const arrArray = [[1, 2], [3, 4]];

function newReduce(callback, arr, initialVal) {
  const srcArr = arr;
  let acc = initialVal;

  // Loop array
  for (let i = 0; i < arr.length; i++) {
    // Here we use the prop dynamically in the callback function
    // currentVal now becomes the object at index i
    let currVal = arr[i]
    let currIn = i;

    // Set acc to the sum of the callback functions return value
    acc = callback(acc, currVal, currIn, srcArr);
  }

  return acc;
};

const reducedNumbers = newReduce((acc, currVal) => {
  // The currVal is now the object
  //  We can extract any property we want from it in here
  return acc + currVal.population;

}, objArray, 2);

const flattenArray = newReduce((acc, currVal) => {
  // Here we test if array flatten functionality works
  return acc.concat(currVal);

}, arrArray, []);

console.log(reducedNumbers);
console.log(flattenArray);