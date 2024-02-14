"use strict";
// function greet(person: String, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`)
// }
// greet('Mitch', new Date())
// async function fn(x: Array<number>): Promise<number> {
//     return x.length
// }
// let firstName: string = 'Mitch'
// console.log(fn([1,2,3,4,5]))
// type Point = {
//     x: number
//     y: number
//     z?: number
// }
// function printCoord(pt: Point) {
//     console.log(`The coord X is ${pt.x}`)
//     console.log(`The coord Y is ${pt.y}`)
//     if (pt.z) {
//         console.log(`The coord Z is ${pt.z}`);
//     }
// }
// printCoord({x: 3, y: 7, z: 4})
// function printId(id: number | string): void {
//     console.log(`Your ID is ${id}`)
// }
// const input = '12345'
// printId(input)
// printId(789)
var Sizes;
(function (Sizes) {
    Sizes[Sizes["XS"] = 0] = "XS";
    Sizes[Sizes["S"] = 1] = "S";
    Sizes[Sizes["M"] = 2] = "M";
    Sizes[Sizes["L"] = 3] = "L";
    Sizes[Sizes["XL"] = 4] = "XL";
})(Sizes || (Sizes = {}));
const item = { color: 'white', size: Sizes.M };
console.log(Sizes);
let ted = {
    name: 'Ted',
    age: 15,
    breed: 'Staffy'
};
