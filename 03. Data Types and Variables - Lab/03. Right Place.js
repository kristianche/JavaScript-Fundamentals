function solve(str, char, result){
    if (str.replace('_', char) === result){
        console.log('Matched')
    } else {
        console.log('Not Matched')
    }
}

solve('Str_ng', 'I', 'Strong')
solve('Str_ng', 'i', 'String')