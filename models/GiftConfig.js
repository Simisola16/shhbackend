const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  options: [String],
  correctIndex: Number,
  explanation: String
});

const ReasonSchema = new mongoose.Schema({
  id: Number,
  frontIcon: String,
  frontText: String,
  backNote: String
});

const GiftConfigSchema = new mongoose.Schema({
  herName: { type: String, default: "Adeola" },
  yourName: { type: String, default: "Muhayad" },
  relationshipStart: { type: String, default: "2023-01-01T00:00:00" },
  landingTitle: { type: String, default: "Adeola, I made you something" },
  landingSubtitle: { type: String, default: "A small collection of memories, moments, and reasons why you mean the world to me." },
  counterCaption: { type: String, default: "and every single second has been my favorite" },
  quizTitle: { type: String, default: "How Well Do You Know Me?" },
  quizSubtitle: { type: String, default: "No wrong answers here — just a fun trip down memory lane together." },
  questions: [QuestionSchema],
  highScoreMessage: { type: String, default: "You know me better than I know myself! You hold the key to my heart." },
  lowScoreMessage: { type: String, default: "Looks like we get to spend way more time making new memories so you can learn all my secrets!" },
  reasons: [ReasonSchema],
  letterTitle: { type: String, default: "A Letter For You" },
  letterParagraphs: [String],
  closingMessage: { type: String, default: "You will always be my favorite adventure. Thank you for being you." },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GiftConfig', GiftConfigSchema);
