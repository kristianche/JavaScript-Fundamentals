function solve(input){
    if (typeof input === 'string' || typeof input === 'number'){
        console.log(typeof input)
        console.log(input)
    } else {
        console.log(typeof input)
        console.log('Parameter is not suitable for printing')
    }

}

solve('Hello, JavaScript!')
solve(18)
solve(null)