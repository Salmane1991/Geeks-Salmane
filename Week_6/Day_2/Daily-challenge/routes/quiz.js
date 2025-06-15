const express = require("express");
const router = express.Router();
const {
  displayQuestion,
  submitAnswer,
  displayScore,
} = require("../controllers/quiz");

router.get("/quiz", displayQuestion);
router.post("/quiz", submitAnswer);
router.get("/quiz/score", displayScore);

module.exports = router;
