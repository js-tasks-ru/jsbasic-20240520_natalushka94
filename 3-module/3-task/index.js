function camelize(str) {
  let newstr;
  newstr = str.split('-');
  for (let i = 1; i < newstr.length; i++) {
    newstr[i] = newstr[i][0].toUpperCase() + newstr[i].slice(1);
  }
  newstr = newstr.join('');
  return newstr;
}
