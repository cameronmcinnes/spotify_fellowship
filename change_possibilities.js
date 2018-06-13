function changePossibilities(coins, target, currCoinIdx = coins.length - 1, memo = {}) {
  if (target === 0) {
    memo[]
    return 1;
  } else if (target < 0 || currCoinIdx < 0) {
    return 0;
  }

  const currCoin = coins[currCoinIdx];

  return (changePossibilities(coins, target, currCoinIdx - 1) +
    changePossibilities(coins, target - currCoin, currCoinIdx));
}

function changeTabulation(coins, target) {
    const tab = new Array(target + 1).fill(0);

    tab[0] = 1;

    for(let i = 0; i < coins.length; i++) {
      for (let j = coins[i]; j <= target; j++) {
        tab[j] += tab[j-coins[i]];
      }
    }

    return tab[target];
}
