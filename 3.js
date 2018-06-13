// Fastest Solution using tabulation
// Time Complexity O(mn) where m is the number of coins and n is target
// Space Complexity: O(n) where n is target

function changePossibilities(coins, target) {
    const tab = new Array(target + 1).fill(0);

    tab[0] = 1;

    for(let i = 0; i < coins.length; i++) {
      for (let j = coins[i]; j <= target; j++) {
        tab[j] += tab[j-coins[i]];
      }
    }

    return tab[target];
}


// Slower solution using recursion and memoization
// Time complexity: O(2^n) where n is the size of the target
// Space complexity: O(2^n)

function changePossibilities(coins, target) {
  const memo = {};
  return _changeStep(coins, target, coins.length - 1, memo);
}

function _changeStep(coins, target, currCoinIdx, memo) {
  const memoKey = target + '|' + currCoinIdx;

  if (target === 0) {
    memo[memoKey] = 1;
    return 1;
  } else if (target < 0 || currCoinIdx < 0) {
    memo[memoKey] = 0;
    return 0;
  }

  if (memo[memoKey] !== undefined) {
    return memo[memoKey];
  }

  const currCoin = coins[currCoinIdx];

  return (_changeStep(coins, target, currCoinIdx - 1, memo) +
  _changeStep(coins, target - currCoin, currCoinIdx, memo));
}
