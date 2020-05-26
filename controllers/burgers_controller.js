const express = require("express");

const router = express.Router();
const burger = require('../models/burger');

// routes go here
router.get("/", async function(req, res) {
  const burgers = await burger.all();
  res.render('index', { burgers: burgers} );
});

router.post("/api/burgers", async function(req, res) {
  await burger.insert(req.body.name);
  res.redirect('/');
});

router.put("/api/burgers/:id", async function(req, res) {
  await burger.update(req.params.id);
  res.json({ 'status': 'finished'});
});

module.exports = router;
