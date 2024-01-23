import express from "express";
import mongoose from "mongoose";
import DB_URI from "./"

const categories = ["Food", "Gaming", "Coding", "Other"];

const entries = [
  { category: "Food", content: "Pizza is yummy!" },
  { category: "Gaming", content: "Skyrim is for the Nords" },
  { category: "Coding", content: "Coding is fun!" },
];

// opened connection via mongoose, connection string from atlas and add Db name after .net/
// add then and catch errors.
mongoose
  .connect(DB_URI
  )
  .then((mc) =>
    console.log(
      mc.connection.readyState === 1
        ? "MongoDB connected!"
        : "MongoDB failed to connect!"
    )
  )
  .catch((err) => console.log(err));

// creates schema for the entries in database
const entriesSchema = new mongoose.Schema({
  category: { type: String, required: true },
  content: { type: String, required: true },
});

// creates model for the entries schema
const EntryModel = mongoose.model("Entry", entriesSchema);

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
    res.status(404).send({ error: "Entry not found" });
  }
});

// create post for entries route
app.post("/entries", async (req, res) => {
  try {
    // Get the entry data from the request
    // console.log(req.body);
    // TODO: Make sure its in correct format(Validate)
    // Create new entry object
    // Push new entry to the array
    // entries.push(req.body);
    const insertedEntry = await EntryModel.create(req.body);
    // Respond with a 201 and the created entry
    res.status(201).send(insertedEntry);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.listen(4001, () => {
  console.log("Server is running on http://127.0.0.1:4001");
});
