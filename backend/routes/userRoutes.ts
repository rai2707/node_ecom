import express, { Request, Response } from "express";
import User from "../model/user";
const jwt = require('jsonwebtoken');
const userRouter = express.Router();

//Register
userRouter.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.create({ name, email, password });
    res
      .status(200)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal server error" });
  }
});
export default userRouter;

//Login
userRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: { email, password },
    });
    if (!user) {
      res.status(400).json({ message: "User not found" });
    }
    const token = jwt.sign({ user: user }, "shivam");
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(400).json({ message: "Error logging in" });
  }
});

//Logout
userRouter.post("/logout", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Logout successful" });
});
