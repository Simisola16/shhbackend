const mongoose = require('mongoose');

const QuizResponseSchema = new mongoose.Schema({
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  userAnswers: [{ questionId: Number, selectedIndex: Number, isCorrect: Boolean }],
  feedback: { type: String },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuizResponse', QuizResponseSchema);
