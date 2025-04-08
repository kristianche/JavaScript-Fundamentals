function solve(arr1, arr2) {
  let newArr = [];

  for (i = 0; i <= arr1.length - 1; i++) {
    if (i % 2 === 0) {
      newArr.push(Number(arr1[i]) + Number(arr2[i]));
    } else {
      newArr.push(arr1[i] + arr2[i]);
    }
  }

  console.log(newArr.join(" - "));
}

solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);

solve(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
