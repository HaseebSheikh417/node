const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server due to unhandled promise rejection");
  process.exit(1);
});

// config
dotenv.config({ path: "backend/config/config.env" });

// connecting to DB
connectDatabase();

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// unhandled prmise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
