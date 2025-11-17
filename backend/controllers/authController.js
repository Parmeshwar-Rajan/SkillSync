import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const createToken = (payload) => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });


export const registerUser = async (req, res) => {
const { name, email, password, college } = req.body;
try {
const existing = await User.findOne({ email });
if (existing) return res.status(400).json({ message: "User exists" });
const hashed = await bcrypt.hash(password, 10);
const user = await User.create({ name, email, password: hashed, college });
const token = createToken({ id: user._id });
res.status(201).json({ token, user });
} catch (err) {
res.status(500).json({ message: err.message });
}
};


export const loginUser = async (req, res) => {
const { email, password } = req.body;
try {
const user = await User.findOne({ email });
if (!user) return res.status(404).json({ message: "No user found" });
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ message: "Wrong password" });
const token = createToken({ id: user._id });
res.json({ token, user });
} catch (err) {
res.status(500).json({ message: err.message });
}
};


export const me = async (req, res) => {
try {
const auth = req.headers.authorization;
if (!auth) return res.status(401).json({ message: "No token" });
const token = auth.split(" ")[1];
const decoded = jwt.verify(token, process.env.JWT_SECRET);
const user = await User.findById(decoded.id).select("-password");
res.json({ user });
} catch (err) {
res.status(401).json({ message: "Invalid token" });
}
};