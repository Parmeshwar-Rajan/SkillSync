import Team from "../models/Team.js";


export const createTeam = async (req, res) => {
try {
const data = req.body;
const team = await Team.create(data);
res.status(201).json(team);
} catch (err) {
res.status(500).json({ message: err.message });
}
};