function solve(arr){
    let output = '';

    for (let el of arr.reverse()){
        output += `${el} `;
    }

    console.log(output);
}

solve(['a', 'b', 'c', 'd', 'e'])