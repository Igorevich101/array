'use strict';

const arrayItem = ['test', false, 2345, null];
console.log(arrayItem);

const newArray = arrayItem.map(function (item,index) {
  return 'Item with index '+index+' has value '+item;
});
console.log(newArray);


const arrayUsers =[
  {firstName: 'Test',
  lastName: 'Testovich',
    age: 27, 
    gender: 'male',
  },
{firstName: 'User', 
lastName: 'Userenko', 
age: 12, 
gender: 'male',
},
{firstName: 'Test`ya', 
lastName: 'Testovna', 
age: 16, 
gender: 'female',
},
{firstName: 'Logina', 
lastName: 'Consol`evna', 
age: 42,
gender: 'female',
},
{firstName: 'Undefined', 
lastName: 'Undefined', 
age: 99
},
{firstName: 'Null', 
lastName: 'Nullochyk', 
gender: 'male'
} 
];

const arrayAdult = arrayUsers.filter(function callback(users) {
  return users.age >= 18;
});


const newArrayUsers = [
  {firstName: 'Test', 
  lastName: 'Testovich',
  age: 27, 
  gender: 'male',
},
{firstName: 'User', 
lastName: 'Userenko', 
age: 12, 
gender: 'male',
},
{firstName: 'Test`ya', 
lastName: 'Testovna', 
age: 16, 
gender: 'female',
},
{firstName: 'Logina', 
lastName: 'Consol`evna', 
age: 42, 
gender: 'female',
},
{firstName: 'Undefined', 
  lastName: 'Undefined', 
  age: 99,
},
{firstName: 'Null', 
  lastName: 'Nullochyk', 
  gender: 'male',
}];

const firstFemale = newArrayUsers.findIndex(function (name) {
  return name.gender === 'female'
});

