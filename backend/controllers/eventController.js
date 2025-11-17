import Event from "../models/Event.js";


export const createEvent = async (req, res) => {
try {
const data = req.body;
const ev = await Event.create(data);
res.status(201).json(ev);
} catch (err) {
res.status(500).json({ message: err.message });
}
};


export const listEvents = async (req, res) => {
try {
const events = await Event.find().sort({ date: 1 });
res.json(events);
} catch (err) {
res.status(500).json({ message: err.message });
}
};


export const getEvent = async (req, res) => {
try {
const event = await Event.findById(req.params.id);
res.json(event);
} catch (err) {
res.status(500).json({ message: err.message });
}
};