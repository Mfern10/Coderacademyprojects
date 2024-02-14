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

enum Sizes {
    XS,
    S,
    M,
    L,
    XL
}

type TShirt = {
    color: string
    size: Sizes
}

const item: TShirt = { color: 'white', size: Sizes.M}

console.log(Sizes)


type Animal = {
    name: string
    age: number
}

type Dog = {
    breed: string
}

let ted: Animal & Dog = {
    name: 'Ted',
    age: 15,
    breed: 'Staffy'

}

