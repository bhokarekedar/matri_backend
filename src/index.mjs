
// import './env.mjs';
import mongoose from "mongoose";
import { createApp } from "./createApp.mjs";



mongoose
  .connect("mongodb://localhost/matri")
  .then(() => {
    // console.log("Country", Country.getAllCountries())
    return console.log("Connected to Database");
  })
  .catch((err) => console.log(`Error: ${err}`));

const app = createApp();

// Allow all origins but restrict methods and headers
console.log("process.env.PORT", process.env.PORT)
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
