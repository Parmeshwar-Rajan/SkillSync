import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", skills: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, skills: form.skills.split(",") }),
    });
    const data = await res.json();
    alert(data.message);
    if (res.ok) navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <div className="form-container__input-container">
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}
