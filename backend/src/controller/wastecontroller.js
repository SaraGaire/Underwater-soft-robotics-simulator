const mongoose = require('mongoose');

const WasteSchema = new mongoose.Schema({
  type: String,
  location: {
    lat: Number,
    lng: Number
  },
  collectedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Waste', WasteSchema);
