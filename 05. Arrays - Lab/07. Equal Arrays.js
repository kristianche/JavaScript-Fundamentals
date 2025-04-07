function solve(arr1, arr2){
    let equalArrays = true;

    for (i = 0; i <= arr1.length - 1; i++){
        if (Number(arr1[i]) !== Number(arr2[i])){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            equalArrays = false;
            break;
        }
    }

    if (equalArrays){
        let sum = 0;

        for (let num of arr1){
            sum += Number(num);
        }

        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5'])