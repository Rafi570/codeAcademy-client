"use client";

import { AuthContext } from "@/Context/AuthProvider";
import Link from "next/link";
import { useContext } from "react";
// import { AuthContext } from "@/Context/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  // Menu Links
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/aboutUs">About Us</Link>
      </li>
      <li>
        <Link href="/allReview">All Review</Link>
      </li>
      {user && (
        <>
          <li>
            <Link href="/myCourse">My Courses</Link>
          </li>
          <li>
            <Link href="/myReviewCourse">My Review Courses</Link>
          </li>
          <li>
            <Link href="/addToCard">Add To Card</Link>
          </li>
          <li>
            <Link href="/allCourses">All Courses</Link>
          </li>
        </>
      )}
    </>
  );

  // Handle Logout
  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50 px-4 md:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl font-bold text-indigo-600"
        >
          CodeAcademy
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-700 hover:text-indigo-600">
          {links}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex gap-2">
        {/* If user logged in → show logout */}
        {user ? (
          <>
            <span className="text-gray-600 font-semibold hidden md:block">
              {user?.displayName || user?.email}
            </span>

            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-500 border-none hover:bg-red-600 text-white"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            {/* If no user → Show Login & Register */}
            <Link
              href="/login"
              className="btn btn-outline btn-sm text-indigo-600 border-indigo-600 hover:bg-indigo-100"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="btn btn-sm bg-indigo-600 border-none hover:bg-indigo-700 text-white"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
