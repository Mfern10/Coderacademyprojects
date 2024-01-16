
// EXAMPLE OF CALLBACK FUNCTION.
// function adder(x, y, cb) {
//     cb(x + y)
// }

// adder(5, 10, result => console.log(result))

// console.log('Done')


// SENDING REQUESTS TO THE SERVER OR API
// -OLD WAY
function getJoke(cb) {
const req = new XMLHttpRequest()
// set event listener for the request
req.addEventListener('load', event => cb(event.target.response.joke))
// open the request
req.open('GET', 'https://icanhazdadjoke.com/')
// set the request header
req.setRequestHeader('Accept', 'application/json')
// set respomse type
req.responseType = 'json'
// send the request
req.send()
}
// call get joke function and the callback to send the joke.
getJoke(joke => console.log(joke))

console.log('Request sent')
