// routes/shows.js
const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const { Show } = require("../models");

// GET all shows
router.get("/", async (req, res) => {
  try {
    const shows = await Show.findAll();
    res.json(shows);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET one show by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const show = await Show.findByPk(id);
    if (show) {
      res.json(show);
    } else {
      res.status(404).json({ error: "Show not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
