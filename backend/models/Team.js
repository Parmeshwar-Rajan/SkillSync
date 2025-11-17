import mongoose from "mongoose";


const teamSchema = new mongoose.Schema({
name: String,
members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
tasks: [{ title: String, done: Boolean }]
}, { timestamps: true });


export default mongoose.model("Team", teamSchema);