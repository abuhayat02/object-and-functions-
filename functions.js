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

    // spread opartor 

let rollNumbers = [34,35,5,56,34,23,23,22,36];

let lastBancer = (array) => Math.max(...array);

let badBoy = lastBancer(rollNumbers);

console.log(`hey idiot 😡, you can't learn ? roll : ${badBoy}`);

// disstrucring in objects 

let {name , age , occupation : job} = person ;

let info = `my name ${name} and age ${age} my job ${job}` ;

console.log(info)

