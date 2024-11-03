function battleHorde(zombies, humans) {
  zombies = zombies.split("");
  humans = humans.split("");

  for (var i = 0; i < humans.length; i++) {
    if (zombies[i] < humans[i]) {
      let points = humans[i] - zombies[i];
      if (i === 2) {
        return points ? `${points}h` : "x";
      }
    }
    if (humans[i] < zombies[i]) {
      let points = zombies[i] - humans[i];
      if (i === 2) {
        return points ? `${points}z` : "x";
      }
    }
  }
  return "x";
}

console.log(battleHorde("444", "282"));
