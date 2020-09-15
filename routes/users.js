import express from "express";

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
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  console.log("Post Route Reached");
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.send(`User with the name ${user.firstName}`);
});

export default router;
