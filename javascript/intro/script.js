// const enforces a constant variable meaning that it can't be changed 
// const maxTemp = 28
// console.log(maxTemp)
// maxTemp = 30
// console.log(maxTemp) 

//var is keyword for global variables so it may want to be avoided.
//let will declare variable to its local scope.
// var x = 'Sarah'

// {
//     console.log(x)
//     console.log(42)
//     let y = 5
// }

// console.log(y)

// let str = 'Hello World!'

// // shows starting index of sub string
// // if the sub string is not in the string it will show -1 as -1 
//is not a valid index in JS
// console.log(str.indexOf('lo'))

// // shows length of string 
// console.log(str.length)

// // JS slice start index but end index is exclusive
// console.log(str.slice(6,9))

// // shows specific element at index
// console.log(str.charAt(1))


// // replaces string with new string.
// console.log(str.replace('Hello', 'Goodbye'))

// console.log(str)

// // replace just the first o in the string
// console.log(str.replace('o', '---'))

// // replaces all the o with --- 
// console.log(str.replaceAll('o','---'))

// // python: print(f'Hello, {name!}')
// // f strings in JS : Use backtick notation for template string 
//and prefix the variable with $
// console.log(`Hello, ${str}`)

// // can be used with any valid expression
// console.log(`Answer: ${5*10}`)


// // regular division with /
// console.log(3 / 2)

// // integer division have to do regular division and 
//take floor of that method
// console.log(Math.floor(3 / 2))

// let x = 5
// console.log(x++) // can be used in the expression
// // increment x  (Python: x += 1)
// // JS is the same but we can use increment operator
// // x ++ // increment
// // x -- // decrement
// console.log(x)


// example of equality comparison for strict comparison use ===
// console.log('123' === 123) // type coersion is auto in JS
// // triple equals is best practice 



// // typeof keyword tells us the type. There is no int 
//or float in JS they are all numbers
// let x = 5

// console.log(typeof x)


// Python Dictionary: person = {"name": "Matt"}
// This is creating an object in JS/ a JS object is a python 
//class and python doctonary fused together
// let person = {
//     name: 'Matt', 
//     age: 51
// }

// console.log(person.age) 
// // dot notation works because its an object
// // but person['name] would also retrieve Matt



// // An array in JS where all elements can be of different types
// x = [1, 2, 3, 3.14159, true, 'Hello']

// console.log(x[x.length-1])

// defining a function
// Python
// def add(x,y):
//   return x + y

// in JS we use:
// function add(x,y) {
//     return x + y
// }

// console.log(add(10, 34))

// const Utils = {
// // Arrow head function Anonymous function(Can be used with callback function)
//     add: (x,y) => x + y,

// // if it takes one parameter we can omit the parethethis on paramter
//     squares: arr => arr.map(x => x ** 2),

// // double number
//     double: x => x * 2

// // arrowhead functions that can be used for mapping square value to arr
// }

// // console.log(add(10,34))
// // console.log(square(10))

// //exmple of mapping
// const numbers = [12, 50, 44, 32, 2]
// const result = Utils.double(numbers) // calls back the double function
// console.log(result) // will double the numbers



// Destructuring

// const people = ['Matt', 'John', 'Mary', 'Kate']

// // create 2 variables (first and second) First will take first value and second will take second.
// const [first, second, ...others] = people // ... = rest operator gets the remaining values and puts in Array

// console.log(first, second, others)


// concatenation of lists
// const bobBirds = ['Robin', 'Crow']
// const sallyBirds = ['Bluejay', 'Cardinal']

// // concats the two lists together, using concat you can't add extra elements
// // const allBirds = bobBirds.concat(sallyBirds)

// // new list of 4 elements from both lists and expand into one list , using this method you can add extra elements
// const allBirds = [...bobBirds, ...sallyBirds, 'Kookaburra']

// console.log(allBirds)

// // ... has destructured the array into its elements(expansion operator)
// console.log(bobBirds)


// creates and object then expands that object in new object and force changes the change of favourite color.
const me = { name: 'Mitch', age: 29, favouriteColor: 'purple'}
const me2 = { ...me, favouriteColor: 'red'}

console.log(me)
console.log(me2)











