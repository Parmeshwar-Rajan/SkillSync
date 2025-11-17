import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
college: String,
skills: [String],
interests: [String],
reputation: { type: Number, default: 0 },
badges: [String] // simple array for badges
}, { timestamps: true });


export default mongoose.model("User", userSchema);