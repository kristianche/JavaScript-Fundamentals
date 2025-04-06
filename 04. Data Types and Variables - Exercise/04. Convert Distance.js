function solve(distanceInMeters){
    const distanceInKilometres = distanceInMeters / 1000;
    const distanceInMiles = (distanceInKilometres * 0.621371).toFixed(2);

    console.log(`${distanceInMeters} meters is equal to ${distanceInKilometres} kilometers.`);
    console.log(`${distanceInKilometres} kilometers is equal to ${distanceInMiles} miles.`);
}

solve(1852);
solve(798);