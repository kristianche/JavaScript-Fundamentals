function triangleOfNumbers(number){
    let str = '';

    for (i = 1; i <= number; i++){
        for (j = 1; j <= i; j++){
            str += i + ' ';
        }

        console.log(str);
        str = '';
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);