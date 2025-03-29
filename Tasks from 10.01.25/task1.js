const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

function outputNumbersLessThanFive(arr) {
  return arr.filter((n) => n < 5);
}

function findPositionsOfMinMax(arr) {
  let min = Math.min(...arr),
    max = Math.max(...arr);
  return {
    minPositions: arr.reduce(
      (acc, n, i) => (n === min ? acc.concat(i) : acc),
      []
    ),
    maxPositions: arr.reduce(
      (acc, n, i) => (n === max ? acc.concat(i) : acc),
      []
    ),
  };
}

function sortArrayDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

function elementsGreaterThanMean(arr) {
  let mean = arr.reduce((s, n) => s + n, 0) / arr.length;
  return arr.filter((n) => n > mean);
}

console.log("Numbers < 5:", outputNumbersLessThanFive(numbers));
console.log("Min & Max positions:", findPositionsOfMinMax(numbers));
console.log("Descending order:", sortArrayDescending(numbers));
console.log("Elements > mean:", elementsGreaterThanMean(numbers));
