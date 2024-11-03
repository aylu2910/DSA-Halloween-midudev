function battleHorde(zombies, humans) {
  zombies = zombies.split("");
  humans = humans.split("");

  for (var i = 0; i < humans.length; i++) {
    if (zombies[i] < humans[i]) {
      let points = humans[i] - zombies[i];
      if (i === 2) {
        return `${points}h`;
      }
    }
  }

  return "x";
}
