// console.log("Hello world!")

// // Old way to link the element from HTML to the JS  file
// const el = document.getElementById("foo")
// // console.log(el)

// el.innerHTML = 'Hello <span style="color: red"> World!</span>'

// New Method. Uses query selector same selectors as CSS selectors
// #=id  . = class

// const el = document.querySelectorAll('li')
// console.log(el)

// el.innerHTML = 'Hello <span style="color: red"> World!</span>'

// dynamically adding an element to the DOM
// const newDiv = document.createElement('div')
// document.body.insertBefore(newDiv, document.querySelector('ul'))
// newDiv.innerHTML = '<h3>Awesome content!</h3>'
// newDiv.id = 'spam'
// newDiv.style.color = 'blue'


//const myColor = 'blue'
//document.body.innerHTML += `<div id="spam" style="color: ${myColor}"><h3>Awesome content!</h3></div>`


// Dynamically generate the list items so they are generated through JS 
const items = [
'Adding to the DOM',
'Querying the DOM',
'Changing the DOM',
'Event listeners'
]

const ul = document.querySelector('ul')

// for (let item of items) {
//     const newLi = document.createElement('li')
//     newLi.innerText = item
//     ul.appendChild(newLi)
// }

// for (let item of items) {
//     ul.innerHTML += `<li>${item}</li>`
// }


const lis = items.map(item => `<li>${item}</li>`)
ul.innerHTML += lis.join("")