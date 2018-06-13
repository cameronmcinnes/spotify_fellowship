function changePossibilities(coins, target, currCoinIdx = coins.length - 1) {
  if (target === 0) {
    return 1;
  } else if (target < 0 || currCoinIdx < 0) {
    return 0;
  }

  const currCoin = coins[currCoinIdx];

  return (changePossibilities(coins, target, currCoinIdx - 1) +
    changePossibilities(coins, target - currCoin, currCoinIdx));
}
