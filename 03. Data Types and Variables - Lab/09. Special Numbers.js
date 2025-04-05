function solve(number){
    for (let i = 1; i <= number; i++){
        let digitsSum = i.toString().split('').reduce((acc, curr) => acc + Number(curr), 0)
        if ( digitsSum === 5 || digitsSum === 7 || digitsSum === 11){
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }
    }
}

solve(15);
solve(20);