const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Email should also be unique
  password: { type: String, required: true },
  userId: { type: String, unique: true } // Ensure userId is unique
});

// Middleware to generate a unique userId
userSchema.pre('save', function (next) {
  if (!this.userId) {
    this.userId = `user_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
