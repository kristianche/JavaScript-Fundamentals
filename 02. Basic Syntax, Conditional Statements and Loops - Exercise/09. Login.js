function login(input){
    let [username, ...passwords] = input;
    let counter = 0;

    for (let pass of passwords){
        if (pass.split('').reverse().join('') === username){
            console.log(`User ${username} logged in.`);
            break;
        } else {
            counter++;
            if (counter === 4){
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);