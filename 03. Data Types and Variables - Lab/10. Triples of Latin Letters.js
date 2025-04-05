function solve(nStr){
    const n = Number(nStr);
    const letters = 'abcdefghijklmnopqrstuvwxyz'.slice(0, n);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(letters[i] + letters[j] + letters[k]);
            }
        }
    }
}

solve('3')