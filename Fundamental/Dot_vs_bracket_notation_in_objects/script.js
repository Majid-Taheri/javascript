// Dot vs. Bracket Notation
const majid = {
    firstName: 'Majid',
    lastName: 'Taheri',
    age: 2037 - 1989,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  console.log(majid);
  
  console.log(majid.lastName);
  console.log(majid['lastName']);
  
  const nameKey = 'Name';
  console.log(majid['first' + nameKey]);
  console.log(majid['last' + nameKey]);
