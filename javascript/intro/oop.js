
//Python
// class Foo:
//   def __init__(self):
//      pass
//
// x = Foo()


// JS you can place items in object brackets or with dot notation dynamically.
// constructer for JS makes Person a custom datatype


// constructor function
// function Person(name, age) {
//     this.name = name
//     this.age = age

//     this.greet = () => {
//         console.log(`${this.name} is ${this.age} years old.`)
//     }
// }

// constructor class

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     greet() {
//         console.log(`${this.name} is ${this.age} years old`)
//     }
// }

// // when referring to a property of an object you must use this.name must prefix with this.
// const person = new Person('Mitch', 29)
// // person.name = 'Mitch'
// // person.age = 30

// console.log(person)
// person.greet()


// getters and setters

class Rectangle {
    #width
    #height
    constructor(width, height) {
        this.#width = width
        this.#height = height
    }

    get width() { return this.#width }
    set width(value) { 
        if (typeof value === 'number') {
            this.#width = value
        } else {
            // raise exception
        }
    }
    get height() { return this.#height }
    set height(value) {
        if (typeof value === 'number') {
            this.#height = value
        } else {
            // raise exception
        }}
    get area() {
        return this.#width * this.#height // The get turns area into a property backed up by a function.
    }
}

// const rect = new Rectangle(10, 20)
// rect.area = 5 // using get wont allow the reassignment of area
// rect.width = 'Hi' // the result is not a number so will get NaN(not a number) Can't be set to private because not defined in a class

// console.log(rect.area)


// Python inheritance
// class Square(Rectangle):


// JavaScript Inheritance
class Square extends Rectangle {
    
    constructor(size=5) {
        super(size, size) // need to call super to get the parameters from the parent constructor
    }
}
const x = new Square(size=20)
console.log(x.area)


