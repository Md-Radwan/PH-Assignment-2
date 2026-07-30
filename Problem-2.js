function isElevatorSafe(weights) {
    let arr = weights;
    let totalWeight = 0;
    if (!Array.isArray(arr)) {
        return "Invalid" 
    } 
    for (const eachWeight of arr) {
        totalWeight += eachWeight;
    }
    if(totalWeight <= 400){
        return true;
    } else{
        return false
    }
}


console.log(isElevatorSafe([60,75,50]));
console.log(isElevatorSafe([90, 100, 95, 120]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));
console.log(isElevatorSafe({"weight":60}));

