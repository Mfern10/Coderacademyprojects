import express from "express";

const categories = ["Food", "Gaming", "Coding", "Other"];

const entries = [
  { category: "Food", content: "Pizza is yummy!" },
  { category: "Gaming", content: "Skyrim is for the Nords" },
  { category: "Coding", content: "Coding is fun!" },
];

const app = express();

// use lets us use the middlewear makes sure items come through as JSON
app.use(express.json());

// creating a route in express. HTTP METHODS ARE USED AFTER DOT
app.get("/", (req, res) => res.send({ info: "Journal API" })); // sends response as JSON

// creates route to fetch categories
app.get("/categories", (req, res) => res.status(201).send(categories));

// creats a route to fetch  all entries
app.get("/entries", (req, res) => res.status(200).send(entries));

// Get one entry
app.get("/entries/:id", (req, res) => {
  const entry = entries[req.params.id - 1];
  if (entry) {
    res.send(entry);
  } else {
    res.status(404).send({error: 'Entry not found'})
  }
});

// create post for entries route
app.post("/entries", (req, res) => {
  // Get the entry data from the request
  console.log(req.body);
  // TODO: Make sure its in correct format(Validate)
  // Create new entry object
  // Push new entry to the array
  entries.push(req.body);
  // Respond with a 201 and the created entry
  res.status(201).send(entries[entries.length - 1]);
});

app.listen(4001, () => {
  console.log("Server is running on http://127.0.0.1:4001");
});
