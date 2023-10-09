const express = require("express");
require("../src/db/conn");
const teamRoutes = require("../src/routes/teamRoutes");
const userRoutes = require("../src/routes/userRoutes");
const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;
// server gets started here....
app.listen(port, () => {
  console.log(`Server started at ${port}...`);
});
app.use("/teams", teamRoutes);
app.use("/users", userRoutes);
