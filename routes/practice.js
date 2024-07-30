const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");




router.get("/allusers", async (req, res) => {
  try {
    // const user = await User.findById(req.user.id);
    const users = await User.find().select("-password");
    console.log(users);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/users/:username", async (req, res) => {
//   const { username } = req.query;
  try {
    const username = req.params.username;
    console.log("uu",req.params);
    const users = await User.find({ username: username }).select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
