const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { readdirSync } = require("fs");
const dotenv = require("dotenv").config();
app.use(cors());
app.use(express.json());
//ROUTES
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is listening...");
});
