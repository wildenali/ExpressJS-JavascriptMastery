import express from "express";

const router = express.Router();

const users = [
  {
    name: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    name: "Jane",
    lastName: "Doe",
    age: 22,
  },
];

// all routes in here are starting with /users
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

export default router;
