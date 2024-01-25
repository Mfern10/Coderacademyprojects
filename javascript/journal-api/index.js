import express from "express";
import { CategoryModel } from "./db.js";
import entryRoutes from './routes/entry_routes.js'

const app = express();

// connect entry router

// use lets us use the middlewear makes sure items come through as JSON
app.use(express.json());

// TODO: Move /categories to routes folder and modularize
// TODO: Complete Categories CRUD
// TODO: ADVANCED: Modify "GET /categories/:id" to embed an array of all entries in that category


// creating a route in express. HTTP METHODS ARE USED AFTER DOT
app.get("/", (req, res) => res.send({ info: "Journal API" })); // sends response as JSON

// creates route to fetch categories. CREATE FULL CRUD ROUTES
app.get("/categories", async (req, res) =>
  res.status(201).send(await CategoryModel.find())
);

app.use('/entries', entryRoutes);

app.listen(4002, () => {
  console.log("Server is running on http://127.0.0.1:4001");
});
