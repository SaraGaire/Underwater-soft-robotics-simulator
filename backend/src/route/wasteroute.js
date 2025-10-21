const Sensor = require('../models/Sensor.model');

exports.getCurrent = async (req, res) => {
  const latest = await Sensor.findOne().sort({ timestamp: -1 });
  res.json(latest);
};

exports.record = async (req, res) => {
  const data = new Sensor(req.body);
  await data.save();
  res.status(201).json({ message: "Sensor data recorded" });
};
