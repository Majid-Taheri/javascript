// Dot vs. Bracket Notation
const majid = {
    firstName: 'Majid',
    lastName: 'Taheri',
    age: 2037 - 1989,
    job: 'engineer',
    friends: ['Michael', 'Peter', 'Steven']
  };
  console.log(majid);
  
  console.log(majid.lastName);
  console.log(majid['lastName']);
  
  const nameKey = 'Name';
  console.log(majid['first' + nameKey]);
  console.log(majid['last' + nameKey]);


const interestedIn = prompt('What do you want to know about Majid? Choose between firstName, lastName, age, job, and friends');


if (majid[interestedIn]) {
    console.log(majid[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

majid.location = 'USA';
majid['twitter'] = '@??';
console.log(majid);

// Challenge
// "Majid has 3 friends, and his best friend is called Peter

console.log(`${majid['firstName']} has ${majid.friends.length} friends and his best friend is called ${majid.friends[1]}`)