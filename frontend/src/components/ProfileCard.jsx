export default function ProfileCard({ user }) {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.college}</p>
      <p className="mt-2 text-sm">
        <strong>Skills:</strong> {user.skills?.join(", ")}
      </p>
    </div>
  );
}
