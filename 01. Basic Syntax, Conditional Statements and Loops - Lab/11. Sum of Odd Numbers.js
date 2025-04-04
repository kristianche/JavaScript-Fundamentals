function sumOfOddNumbers(numbersToBePrinted){
    let counter = 0;
    let sum = 0;
    let number = 1;

    while (true){
        if (counter === numbersToBePrinted){
            break;
        }

        console.log(number);
        sum += number;
        number += 2;
        counter++;
    }

    console.log(`Sum: ${sum}`)
}

sumOfOddNumbers(5)