function getMinMax(str) {
  let newstr;
  newstr = str.split(' ');
  for (let i = 0; i < newstr.length; i++) {
    newstr[i] = Number(newstr[i]);
  }
  let filtered = newstr.filter(Boolean);
  let result = {
    min: Math.min(...filtered),
    max: Math.max(...filtered)
  };
  return result;
}
