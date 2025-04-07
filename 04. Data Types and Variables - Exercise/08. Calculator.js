function solve(firstNumber, operator, secondNumber){
    switch (operator){
        case '+':
            console.log((firstNumber + secondNumber).toFixed(2));
            break;
        
        case '-':
            console.log((firstNumber - secondNumber).toFixed(2));
            break;
        
        case '*':
            console.log((firstNumber * secondNumber).toFixed(2));
            break;

        case '/':
            console.log((firstNumber / secondNumber).toFixed(2));
            break;
    }       
}

solve(5, '+', 10);