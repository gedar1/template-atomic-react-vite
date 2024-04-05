export const levenshteinDistance = (s: string, t: string) => {
  if (!s?.length) return t?.length;
  if (!t?.length) return s?.length;

  let validate;
  const arr = [];
  for (let i = 0; i <= t?.length; i++) {
    arr[i] = [i];
    for (let j = 1; j <= s?.length; j++) {
      validate = s[j - 1] === t[i - 1] ? 0 : 1;
      arr[i][j] =
        i === 0
          ? j
          : Math.min(
              arr[i - 1][j] + 1,
              arr[i][j - 1] + 1,
              arr[i - 1][j - 1] + validate
            );
    }
  }
  return arr[t?.length][s?.length];
};

export const validar = (ia: string, user: string) => {
  const itemIa: string[] = ia?.trim()?.split(" ");
  const itemUser: string[] = user?.trim()?.split(" ");
  const results = [];
  for (let i = 0; i < itemIa?.length; i++) {
    const result = levenshteinDistance(itemIa[i], itemUser[i]);
    results.push(result);
  }
  return results;
};