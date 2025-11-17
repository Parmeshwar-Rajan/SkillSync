import express from "express";
import Event from "../models/Event.js";
import User from "../models/User.js";

const router = express.Router();

// GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD new event
router.post("/", async (req, res) => {
  try {
    const { name, date, location, description } = req.body;

    const newEvent = new Event({ name, date, location, description });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// REGISTER user for an event
router.post("/:eventId/register", async (req, res) => {
  try {
    const { eventId } = req.params;
    const { userId } = req.body;

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // For simplicity, we just store registered user IDs in the event itself
    if (!event.participants) event.participants = [];

    if (event.participants.includes(userId)) {
      return res.status(400).json({ message: "User already registered" });
    }

    event.participants.push(userId);
    await event.save();

    res.json({ message: "Registered successfully!", event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
