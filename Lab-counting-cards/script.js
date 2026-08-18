let count = 0;

// Step 2: Create the cardCounter function
function cardCounter(card) {
  // Step 3: Check card value and update count
  if (card >= 2 && card <= 6) {
    count++;  // Low cards: increase by 1
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;  // High cards: decrease by 1
  }
  // 7, 8, 9: do nothing (count stays the same)
  
  // Step 4: Return result with decision
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
