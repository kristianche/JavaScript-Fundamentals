function solve(number){
    let arr = number.toString().split('')
    let digitsSum = 0;

    for (let el of arr){
        digitsSum += Number(el)
    }

    if (digitsSum.toString().includes('9')){
        console.log(`${number} Amazing? True`)
    } else {
        console.log(`${number} Amazing? False`)
    }
}

solve(1233)
solve(999)