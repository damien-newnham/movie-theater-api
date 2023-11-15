// routes/users.js
const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const { User } = require("../models");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET one user by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
