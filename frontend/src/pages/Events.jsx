import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ name: "", date: "", location: "", description: "" });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await axios.get("http://localhost:5000/api/events");
    setEvents(res.data);
  };

  const handleRegister = async (id) => {
    try {
      const userId = "672b9f1b2f8a8a18c9e2e123"; // temporary test user ID
      await axios.post(`http://localhost:5000/api/events/${id}/register`, { userId });
      alert("Successfully registered!");
    } catch (err) {
      alert("Error registering: " + err.response?.data?.message || err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/events", form);
      alert("Event added!");
      setForm({ name: "", date: "", location: "", description: "" });
      fetchEvents();
    } catch (err) {
      alert("Error adding event");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto events-container">
      <h1 className="text-2xl font-bold mb-4 title__events">Upcoming Events</h1>

      <div className="space-y-4 mb-8 event-list-container">
        {events.map((event) => (
          <div key={event._id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p>{event.description}</p>
            <p className="text-sm text-gray-600">
              📍 {event.location} — {event.date}
            </p>
            <button
              onClick={() => handleRegister(event._id)}
              className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-2 border p-4 rounded-lg form-container__input-container">
        <input
          type="text"
          placeholder="Event Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Date (e.g. 15th Nov)"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default Events;
