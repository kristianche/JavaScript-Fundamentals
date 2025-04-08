function solve(arr, number) {
  let output = "";

  for (i = 0; i <= arr.length - 1; i++) {
    for (j = i + 1; j <= arr.length - 1; j++) {
      if (Number(arr[i]) + Number(arr[j]) === number) {
        output += `${arr[i]} ${arr[j]}\n`;
      }
    }
  }
  console.log(output);
}

solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6], 6);
