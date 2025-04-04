function division(number){
    let divisbleNumber;

    if (number % 10 === 0){
        divisbleNumber = 10;
    } else if (number % 7 === 0){
        divisbleNumber = 7;
    } else if (number % 6 === 0){
        divisbleNumber = 6;
    } else if (number % 3 === 0 && number % 2 !== 0){
        divisbleNumber = 3;
    } else if (number % 2 === 0 && number % 3 !== 0 && number % 10 !== 0){
        divisbleNumber = 2;
    } else {
        divisbleNumber = 'Not divisible'
    }

    if (typeof divisbleNumber === 'number'){
        console.log(`The number is divisible by ${divisbleNumber}`)
    } else {
        console.log(divisbleNumber)
    }
}

division(30);
division(15);
division(12);
division(1643);