
var person={
    firstName:"Johny",
    age:21,
    isFemale:true,
    balance:100.32,
    dob:new Date(2000,0,30).toJSON(),
    address: {
        city:"London",
        postCode:"312"
    
    }
};
console.log(person.firstName);
console.log(person.age);
console.log(person.balance);

console.log(person.address);
console.log(person.address.city);

console.log(Object.values(person));
console.log(Object.keys(person));

console.log(JSON.stringify(person));