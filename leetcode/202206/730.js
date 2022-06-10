var countPalindromicSubsequences = function (s) {
  const MOD = 1000000007;
  const n = s.length;
  const dp = new Array(4)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));
  for (let i = 0; i < n; i++) {
    dp[s[i].charCodeAt() - 'a'.charCodeAt()][i][i] = 1;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len <= n; i++) {
      let j = i + len - 1;
      for (const c of ['a', 'b', 'c', 'd']) {
        const k = c.charCodeAt() - 'a'.charCodeAt();
        if (s[i] === c && s[j] === c) {
          dp[k][i][j] =
            (2 +
              ((dp[0][i + 1][j - 1] + dp[1][i + 1][j - 1]) % MOD) +
              ((dp[2][i + 1][j - 1] + dp[3][i + 1][j - 1]) % MOD)) %
            MOD;
        } else if (s[i] === c) {
          dp[k][i][j] = dp[k][i][j - 1];
        } else if (s[j] === c) {
          dp[k][i][j] = dp[k][i + 1][j];
        } else {
          dp[k][i][j] = dp[k][i + 1][j - 1];
        }
      }
    }
  }

  let res = 0;
  for (let i = 0; i < 4; i++) {
    res = (res + dp[i][0][n - 1]) % MOD;
  }
  return res;
};
