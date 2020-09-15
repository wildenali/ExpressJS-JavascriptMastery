import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
  },
];

// all routes in here are starting with /users
// GET
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

// CREATE
router.post("/", (req, res) => {
  console.log("Post Route Reached");
  console.log(req.body);
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };

  users.push(userWithId);
  res.send(`User with the name ${user.firstName}`);
});

// GET by Id
router.get("/:id", (req, res) => {
  console.log(req.params);

  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

export default router;
