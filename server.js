const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const dotenv = require("dotenv").config();
connectDb();
const app = express();

app.use(express.json());
app.use("/api/contacts", require("./routes/ContactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
