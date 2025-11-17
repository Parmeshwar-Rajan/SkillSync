export default function EventCard({ event }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold mb-1">{event.title}</h2>
      <p className="text-sm text-gray-600">{event.description}</p>
      <p className="text-xs text-gray-500 mt-2">
        📅 {event.date} | 🏫 {event.organizer}
      </p>
    </div>
  );
}
