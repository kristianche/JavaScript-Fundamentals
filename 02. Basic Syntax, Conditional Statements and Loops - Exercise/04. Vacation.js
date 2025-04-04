function vacation(groupOfPeople, typeOfGroup, dayOfTheWeek){
    let price;

    if (dayOfTheWeek === 'Friday'){
        if (typeOfGroup === 'Students'){
            price = 8.45;
        } else if (typeOfGroup === 'Business'){
            price = 10.90;
        } else if (typeOfGroup === 'Regular'){
            price = 15;
        }
    } else if (dayOfTheWeek === 'Saturday'){
        if (typeOfGroup === 'Students'){
            price = 9.80;
        } else if (typeOfGroup === 'Business'){
            price = 15.60;
        } else if (typeOfGroup === 'Regular'){
            price = 20;
        }
    } else if (dayOfTheWeek === 'Sunday'){
        if (typeOfGroup === 'Students'){
            price = 10.46;
        } else if (typeOfGroup === 'Business'){
            price = 16;
        } else if (typeOfGroup === 'Regular'){
            price = 22.50;
        }
    }

    let totalPrice;

    if (typeOfGroup === 'Students'){
        if (groupOfPeople >= 30){
            totalPrice = (groupOfPeople * price) - (groupOfPeople * price) * 0.15;
        } else {
            totalPrice = groupOfPeople * price;
        }
    } else if (typeOfGroup === 'Business'){
        if (groupOfPeople >= 100){
            totalPrice = (groupOfPeople - 10) * price;
        } else {
            totalPrice = groupOfPeople * price;
        }
    } else if (typeOfGroup === 'Regular'){
        if (groupOfPeople >= 10 && groupOfPeople <= 20){
            totalPrice = (groupOfPeople * price) - (groupOfPeople * price) * 0.05;
        } else {
            totalPrice = groupOfPeople * price;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")