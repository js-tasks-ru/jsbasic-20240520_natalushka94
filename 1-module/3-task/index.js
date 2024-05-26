function ucFirst(str) {
  if (str === "") {
    return "";
  }

  let name = str[0].toUpperCase() + str.slice(1);
  return name;
}

