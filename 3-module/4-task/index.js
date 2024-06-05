function showSalary(users, age) {
  let str = '';
  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      if (str !== '') {
        str = str + '\n' + users[i].name + ', ' + users[i].balance;
      } else {
        str = str + users[i].name + ', ' + users[i].balance;
      }
    }
  }
  return str;
}
