const person = {
    name: "Alice",
    age: 30,
    occupation: "Software Developer",
    hobbies: ["reading", "hiking", "coding"],
    isEmployed: true,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

let getName = (object) => object.name ;

let myName = getName(person);

console.log(myName)