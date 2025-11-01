// models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // must have name
    trim: true
  },
  course: {
    type: String,
    required: true, // must have course
    trim: true
  },
  age: {
    type: Number,
    default: 18
  },
  city: {
    type: String,
    default: 'Unknown',
    trim: true
  }
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('Student', studentSchema);
