// server.js
const express = require("express");
const { sequelize } = require("./models"); // Correct import path
const usersRouter = require("./routes/users");
const showsRouter = require("./routes/shows");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/shows", showsRouter);

sequelize
  .sync({ force: true }) // Use { force: true } to reset the database on each run
  .then(() => {
    console.log("Database synced");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });
