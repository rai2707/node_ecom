import express from "express";
import { sequelize } from "./config/db";
import userRouter from "./routes/userRoutes";
var cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 2000;
app.use("/", userRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.sync();
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`http://localhost:${PORT}`);
});
