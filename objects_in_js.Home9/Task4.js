const person={
    firstName: 'Peter',
    lastName: 'Parker',
    age: 25
};

person.email = 'spiderman@mail.com';

console.log(person)

delete person.age;

console.log(person)