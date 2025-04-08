function solve(arr) {
  let topIntegers = [];
  let topInteger = true;

  for (i = 0; i <= arr.length - 1; i++) {
    for (j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] <= arr[j]) {
        topInteger = false;
        break;
      }
    }

    if (topInteger) {
      topIntegers.push(arr[i]);
    }

    topInteger = true;
  }

  console.log(topIntegers.join(" "));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);
