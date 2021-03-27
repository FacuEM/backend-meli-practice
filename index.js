const express = require("express");
const app = express();
const cors = require("cors");
const itemsRouter = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/items", itemsRouter);

app.listen(5000, () => {
  console.log("Server listening at port 5000");
});
