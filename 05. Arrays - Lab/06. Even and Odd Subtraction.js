function solve(arr){
    let evenSum = 0;
    let oddSum = 0;

    for (let num of arr){
        if (Number(num) % 2 === 0){
            evenSum += Number(num);
        } else {
            oddSum += Number(num);
        }
    }

    console.log(evenSum - oddSum);
}

solve([1,2,3,4,5,6]);