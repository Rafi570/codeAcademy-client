"use client";
import { useEffect, useState } from "react";

export default function AllReview() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://codeacademy-api.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500 animate-pulse">
        Loading reviews...
      </p>
    );

  if (!reviews.length)
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">
        ❌ No reviews found.
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-600 text-center mb-6">
        All Reviews
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Course Title</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Review</th>
              <th className="py-3 px-6 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((r, i) => (
              <tr
                key={r._id}
                className="even:bg-gray-50 odd:bg-gray-100 border-b"
              >
                <td className="py-3 px-6">{i + 1}</td>
                <td className="py-3 px-6 font-semibold">{r.courseTitle}</td>
                <td className="py-3 px-6">{r.email}</td>
                <td className="py-3 px-6">{r.reviewText}</td>
                <td className="py-3 px-6">
                  {new Date(r.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
