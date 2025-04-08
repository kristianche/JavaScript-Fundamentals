function solve(arr1, arr2) {
  let output = "";

  for (i = 0; i <= arr1.length - 1; i++) {
    if (arr2.includes(arr1[i])) {
      output += `${arr1[i]}\n`;
    }
  }

  console.log(output);
}

solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);

solve(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]);
