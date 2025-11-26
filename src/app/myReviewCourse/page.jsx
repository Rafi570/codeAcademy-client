"use client";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/Context/AuthProvider";

export default function MyReviewCourse() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://codeacademy-api.vercel.app/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [user]);

  // Delete Review
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this review?")) return;

    try {
      const res = await fetch(
        `https://codeacademy-api.vercel.app/reviews/${id}`,
        { method: "DELETE" }
      );

      const data = await res.json();
      if (data.success) {
        setReviews((prev) => prev.filter((r) => r._id !== id));
        alert("Review deleted successfully!");
      }
    } catch {
      alert("Error deleting review.");
    }
  };

  if (!reviews.length)
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">
        ✍️ You haven't written any reviews yet.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">My Reviews</h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Course</th>
              <th className="py-3 px-6 text-left">Review</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((r) => (
              <tr key={r._id} className="even:bg-gray-50 odd:bg-gray-100">
                <td className="py-3 px-6 font-semibold">{r.courseTitle}</td>
                <td className="py-3 px-6">{r.reviewText}</td>
                <td className="py-3 px-6">
                  {new Date(r.date).toLocaleDateString()}
                </td>

                <td className="py-3 px-6 flex gap-2">
                  <button
                    onClick={() => alert(r.reviewText)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleDelete(r._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
