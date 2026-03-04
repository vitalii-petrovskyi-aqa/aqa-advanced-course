const users=[
    {name: 'Alice', age: 24, email: 'alice@mail.com'},
    {name: 'Bob', age: 25, email: 'bob@mail.com'},
    {name: 'Dirk', age: 20, email: 'dirk@mail.com'},
    {name: 'Charles', age: 35, email: 'charles@mail.com'}

]

for (const person of users) {
  console.log(`${person.name} is ${person.age} years old with email '${person.email}'`);
}
console.log('---')
for (const { name, email, age } of users) {
	console.log(name, email, age);
}