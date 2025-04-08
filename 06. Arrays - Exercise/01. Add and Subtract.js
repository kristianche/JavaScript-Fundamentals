function solve(arr) {
  let initialSum = 0;
  let newSum = 0;
  let newArr = [];

  for (i = 0; i <= arr.length - 1; i++) {
    initialSum += Number(arr[i]);

    if (Number(arr[i]) % 2 === 0) {
      newSum += Number(arr[i]) + i;
      newArr[i] = Number(arr[i]) + i;
    } else {
      newSum += Number(arr[i]) - i;
      newArr[i] = Number(arr[i]) - i;
    }
  }

  console.log(newArr);
  console.log(initialSum);
  console.log(newSum);
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
