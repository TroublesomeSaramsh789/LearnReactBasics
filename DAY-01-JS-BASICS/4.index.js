const array = [154, 1564, 155, 165, 51, 71, 71, 187, 871];


const arrayTwo = ['aashish', "nripesh", "nabin", "sameep"];

// MAP
// const returnData = array.map((item, index) => {
//     const newValue = item + 5
//     return newValue;
// })
// // console.log(returnData);

// const returnDataTwo = arrayTwo.map((name) => {
//   return `Happy New Year Guys ${name}`;
// });

// console.log(returnDataTwo);


// FILTER

const data = array.filter((item) => { return item > 100 })

const dataTwo = arrayTwo.filter((name) => {
  return !name.includes("aashish");
});

console.log(dataTwo);
