// EXAMPLE OF CALLBACK FUNCTION.
// function adder(x, y, cb) {
//     cb(x + y)
// }

// adder(5, 10, result => console.log(result))

// console.log('Done')

// SENDING REQUESTS TO THE SERVER OR API
// -OLD WAY
// function getJoke() {
//   return new Promise((resolve, reject) => {
//     const req = new XMLHttpRequest();
//     // set event listener for the request
//     req.addEventListener("load", (event) =>
//       resolve(event.target.response.joke)
//     );
//     // open the request
//     req.open("GET", "https://icanhazdadjoke.com/");
//     // set the request header
//     req.setRequestHeader("Accept", "application/json");
//     // set respomse type
//     req.responseType = "json";
//     // send the request
//     req.send();
//   });
// }

function fetchJoke() {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => res.json()).then(data => console.log(data))
}

fetchJoke()

// const jokes = []
// getJoke()
//   .then((joke) => {
//     jokes.push(joke);
//     return getJoke();
//   })
//   .then((joke) => {
//     jokes.push(joke);
//     return getJoke();
//   })
//   .then((joke) => {
//     jokes.push(joke);
//     console.log(jokes);
//   })

// const jokePromises = [];
// for (let i = 0; i < 3; i++) {
//   jokePromises.push(getJoke());
// }

// Promise.all(jokePromises)
//   .then((jokes) => console.log(jokes))
//   .catch((err) => console.error(err));

console.log("Request sent");

// const req = new XMLHttpRequest()
// // set event listener for the request
// req.addEventListener('load', event => cb(event.target.response.joke))
// // open the request
// req.open('GET', 'https://icanhazdadjoke.com/')
// // set the request header
// req.setRequestHeader('Accept', 'application/json')
// // set respomse type
// req.responseType = 'json'
// // send the request
// req.send()
// }
// call get joke function and the callback to send the joke.
