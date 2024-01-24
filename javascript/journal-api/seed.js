import { closeConnection, EntryModel } from "./db.js";

const entries = [
  { category: "Food", content: "Pizza is yummy!" },
  { category: "Gaming", content: "Skyrim is for the Nords" },
  { category: "Coding", content: "Coding is fun!" },
];

// deletes all entries when seeded
await EntryModel.deleteMany();
console.log("Deleted entries");

await EntryModel.insertMany(entries);
console.log("Added entries");

// disonnects the seed
closeConnection();
