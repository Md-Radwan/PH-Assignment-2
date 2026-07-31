//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  } else if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamAGoals < teamBGoals) {
    return "Team B Won";
  } else {
    return "Draw";
  }
}

//Problem-02: Elevator Weight Safety Checker
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


//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
  let cost = tokensUsed - 500;
  let totalCost = cost / 100;

  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  } else if (tokensUsed <= 500) {
    return 0;
  } else {
    return Math.floor(totalCost) * 5;
  }
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }

  let topRestaurant = restaurants[0];

  for (let i = 1; i < restaurants.length; i++) {
    if (restaurants[i].rating > topRestaurant.rating) {
       topRestaurant = restaurants[i];
    }
  }

  return topRestaurant.name.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
    return "Invalid";
  }

  if (times.length == 0) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    } else {
      total = total + times[i];
    }
  }
  return total / times.length;
}

