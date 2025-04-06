function solve(number){
    let sum = 0;
    let numberArr = number.toString().split('')

    for (let digit of numberArr){
        sum += Number(digit);
    }

    console.log(sum)
}

solve(245678);
solve(97561);
solve(543);