function truncate(str, maxlength) {
  if (str.length - maxlength <= 0) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + "…"
  }
}
