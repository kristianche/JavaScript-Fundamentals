function solve(arr){
    let numbers = arr;

    while (numbers.length > 1){
        let condensed = [];
        for (i = 0; i < numbers.length - 1; i++){
            condensed[i] = Number(numbers[i]) + Number(numbers[i + 1]);
        }

        numbers = condensed
    }

    console.log(numbers[0]);
}

solve([2,10,3]);