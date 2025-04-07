function solve(n, inputArr){
    let arr = [];
    let output = '';

    for (let i = 0; i <= n - 1; i++){
        arr.push(inputArr[i]);
    }

    for (let num of arr.reverse()){
        output += `${num} `;
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);