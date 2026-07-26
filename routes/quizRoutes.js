const express = require('express');
const router = express.Router();
const QuizResponse = require('../models/QuizResponse');

// POST save quiz response
router.post('/submit', async (req, res) => {
  try {
    const { score, totalQuestions, userAnswers, feedback } = req.body;
    const response = new QuizResponse({
      score,
      totalQuestions,
      userAnswers,
      feedback
    });
    await response.save();
    res.status(201).json({ message: 'Quiz response stored in MongoDB!', response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all quiz responses
router.get('/history', async (req, res) => {
  try {
    const responses = await QuizResponse.find().sort({ submittedAt: -1 });
    res.json(responses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
