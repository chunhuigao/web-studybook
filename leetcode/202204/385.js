var deserialize = function (s) {
  if (s[0] !== '[') return new NestedInteger(s);
  const d = (ar) => {
    const nestedInteger = new NestedInteger(),
      n = ar.length;
    for (let i = 0; i < n; i++)
      nestedInteger.add(
        typeof ar[i] === 'number' ? new NestedInteger(ar[i]) : d(ar[i])
      );
    return nestedInteger;
  };
  return d(new Function('return (' + s + ')')());
};
