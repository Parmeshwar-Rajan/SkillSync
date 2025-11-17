import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event.js";

dotenv.config();

const addEvent = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const event = new Event({
      name: "SkillSync Ideathon",
      description: "An ideation challenge to promote creative collaboration.",
      date: new Date("2025-12-01T09:00:00Z"),
    });
    await event.save();
    console.log("✅ Event added:", event);
    mongoose.disconnect();
  } catch (error) {
    console.error("Error:", error);
  }
};

addEvent();
