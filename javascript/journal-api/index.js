import express from "express";
import { EntryModel, CategoryModel } from "./db.js";

const categories = ["Food", "Gaming", "Coding", "Other"];

const app = express();

// use lets us use the middlewear makes sure items come through as JSON
app.use(express.json());

// creating a route in express. HTTP METHODS ARE USED AFTER DOT
app.get("/", (req, res) => res.send({ info: "Journal API" })); // sends response as JSON

// creates route to fetch categories
app.get("/categories", async (req, res) =>
  res.status(201).send(await CategoryModel.find())
);

// creats a route to fetch  all entries
app.get("/entries", async (req, res) =>
  res.status(200).send(await EntryModel.find())
);

// Get one entry
app.get("/entries/:id", async (req, res) => {
  const entry = await EntryModel.findById(req.params.id);
  if (entry) {
    res.send(entry); // send back a json object
  } else {
    res.status(404).send({ error: "Entry not found" }); // send back a json object
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

app.put("/entries/:id", async (req, res) => {
  try {
    const updatedEntry = await EntryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedEntry) {
      res.send(updatedEntry);
    } else {
      res.status(404).send({ error: err.message });
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.delete("/entries/:id", async (req, res) => {
  try {
    const deletedEntry = await EntryModel.findByIdAndDelete(req.params.id);
    if (deletedEntry) {
      res.sendStatus(204);
    } else {
      res.status(404).send({ error: "Entry not found" });
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.listen(4002, () => {
  console.log("Server is running on http://127.0.0.1:4001");
});
