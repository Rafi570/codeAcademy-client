"use client";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/Context/AuthProvider";

export default function MyCoursesTile() {
  const { user } = useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://codeacademy-api.vercel.app/my-course?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyCourses(data))
      .catch((err) => console.log(err));
  }, [user]);

  if (!myCourses.length)
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">
        📘 You haven't enrolled in any courses yet.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">
        Your Enrolled Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={
                course.image ||
                "https://via.placeholder.com/300x200?text=No+Image"
              }
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />

            <h3 className="font-semibold text-gray-800 text-lg mb-1">
              {course.title}
            </h3>

            <p className="text-sm text-gray-500 mb-2">
              {course.shortDescription}
            </p>

            <p className="text-sm font-semibold text-indigo-700">
              Price: {course.price}
            </p>

            <p className="text-sm text-gray-500 mb-3">
              Category: {course.category}
            </p>

            {course.enrolledAt && (
              <p className="text-xs text-gray-400">
                Enrolled on:{" "}
                {new Date(course.enrolledAt).toLocaleDateString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
