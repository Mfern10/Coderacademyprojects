// LOOPS

// while loop - keep it running until it reaches condition
// let count = 3 

// while (count > 0) {
//     console.log(count--)
// }

// Python for loop
// for i in range(10)
//      print(i)

// JS for loop comes from C language
// 3-part for loop
// Initializer runs once before the first iteration
// condition will be tested before every iteration
// post-iteration executes after every iteration
// for (initalizer; condition; post-iteration) {}

// const numbers = [1, 2, 5, 21, 44, 37]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// fibanachis sequence
// for (let prev=1, next=1; next <= 1000; tmp=next, next=prev+next, prev=tmp) {
//     console.log(next)
// }


const favFoods = ['pizza', 'pasta', 'tacos']

// Python
// for item in favFoods:
//     print(item)

// JavaScript iterate through collection (of) shows the items (in) shows the index
for (let item of favFoods) {
    console.log(item)
}


// show index and food name nect to index
for (let index in favFoods) {
    console.log(`${parseInt(index)+1}. ${favFoods[index]}`)
}
// simplify the above
favFoods.forEach((food, index) => {
    console.log(`${index+1}. ${food}`)
})




