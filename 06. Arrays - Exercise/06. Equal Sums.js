function solve(arr) {
  if (arr.length === 1) {
    console.log(0);
  } else {
    let leftSum = 0;
    let rightSum = 0;
    let index = 0;

    for (i = 0; i <= arr.length - 1; i++) {
      for (j = 0; j < i; j++) {
        leftSum += Number(arr[j]);
      }

      for (k = i + 1; k <= arr.length - 1; k++) {
        rightSum += Number(arr[k]);
      }

      if (leftSum === rightSum) {
        index = i;
        break;
      }

      leftSum = 0;
      rightSum = 0;
    }

    if (index === 0) {
      console.log("no");
    } else {
      console.log(index);
    }
  }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1, 2, 3]);
solve([1]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
