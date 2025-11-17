import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to SkillSync 🎓</h1>
      <p>
        A student collaboration platform connecting minds for hackathons, academic projects, and learning initiatives.
      </p>
      <Link to="/register">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
