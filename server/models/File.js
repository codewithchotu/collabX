const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  fileName: String,
  fileUrl: String,
});

module.exports = mongoose.model('File', fileSchema);