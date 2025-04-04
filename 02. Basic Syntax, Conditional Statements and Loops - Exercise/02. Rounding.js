function rounding(number, decimalPlaces){
    if (decimalPlaces > 15){
        decimalPlaces = 15
    }

    console.log(parseFloat(number.toFixed(decimalPlaces)));
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3)