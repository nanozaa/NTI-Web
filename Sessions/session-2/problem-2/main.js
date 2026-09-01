function numbersGreaterThan(arr, value) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(numbersGreaterThan([10, 5, 20, 3, 15], 8));
console.log(numbersGreaterThan([2, 4, 6], 10));
