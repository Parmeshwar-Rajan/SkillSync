import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <p>Please log in to access your dashboard.</p>;

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name} 👋</h2>
      <p>Email: {user.email}</p>
      <p>Skills: {user.skills?.join(", ")}</p>
      <Link to="/events">
        <button>Explore Events</button>
      </Link>
    </div>
  );
}

