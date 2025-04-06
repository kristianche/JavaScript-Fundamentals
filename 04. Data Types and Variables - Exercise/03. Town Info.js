function solve(name, population, area){
    const nameCheck = name.length >= 3;
    const populationCheck = population >= 0;
    const areaCheck = area >= 0;

    if (!nameCheck){
        console.log("Town name must be at least 3 characters!");
    }

    if (!populationCheck){
        console.log("Population must be a positive number!");
    }

    if (!areaCheck){
        console.log("Area must be a positive number!");
    }

    if (nameCheck && populationCheck && areaCheck){
        console.log(`Town ${name} has population of ${population} and area ${area} square km.`);
    }
}


solve('Sofia', 1286383, 492);
solve('LA', 1481353, 512);
solve('Ka', 3600, -50);