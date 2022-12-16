



function letterCombinations(digits) {
  if (!digits || !digits.length) return [];

  const mapping = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const result = [];

  function dfs(curr, index) {
    if (index === digits.length) {
      result.push(curr);
      return;
    }
    const letters = mapping[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      dfs(curr + letters[i], index + 1);
    }
  }

  dfs('', 0);
  return result;
}
module.exports = letterCombinations;
