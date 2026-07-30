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

console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));
