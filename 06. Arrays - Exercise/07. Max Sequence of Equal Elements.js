function solve(arr) {
  let digit;
  let counter = 0;
  let max = 0;
  let output = "";

  for (i = 0; i <= arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;

      if (counter > max) {
        max = counter;
        digit = arr[i];
      }
    } else {
      counter = 0;
    }
  }

  for (i = 0; i <= max; i++) {
    output += `${digit} `;
  }

  console.log(output);
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
