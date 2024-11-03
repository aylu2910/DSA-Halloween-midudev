function createMagicPotion(potions, goal) {
  const powerMap = new Map();
  let result = undefined;

  for (let i = 0; i < potions.length; i++) {
    const currentPower = potions[i];
    const complement = goal - currentPower;

    // Check if the complement exists in the map
    if (powerMap.has(complement)) {
      const firstIndex = powerMap.get(complement);

      // If result is undefined or the current second index is smaller
      // than the second index in result, update result
      if (!result || i < result[1]) {
        result = [firstIndex, i];
      }
    }

    // Store the current power and its index in the map
    powerMap.set(currentPower, i);
  }

  // Return the result or undefined if no combination is found
  return result;
}

// Test cases
console.log(createMagicPotion([4, 5, 6, 2], 8)); // Output: [2, 3]
console.log(createMagicPotion([1, 2, 3, 4], 9)); // Output: undefined
console.log(createMagicPotion([1, 2, 3, 4], 5)); // Output: [1, 2]
console.log(createMagicPotion([1, 3, 2, 4], 5)); // Output: [0, 3]

console.log(createMagicPotion([1, 2, 3, 6, 7, 8], 10));
