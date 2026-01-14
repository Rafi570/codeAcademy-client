"use client";

import { AuthContext } from "@/Context/AuthProvider";
import Link from "next/link";
import { useContext, useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef(null);

  // focus first link when sidebar opens, close on ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      firstLinkRef.current?.focus();
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const Links = ({ firstRef }) => (
    <>
      <li>
        <Link href="/" ref={firstRef}>
          Home
        </Link>
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

  const handleLogout = async () => await logOut();

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-sm">
        <div className="navbar px-4 md:px-8 lg:px-10 h-16">
          {/* LEFT */}
          <div className="navbar-start flex items-center gap-2">
            {/* Hamburger: hidden at md and above */}
            <button
              className="btn btn-ghost md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>

            {/* Brand */}
            <Link
              href="/"
              className="text-xl sm:text-2xl md:text-2xl font-extrabold text-indigo-600 tracking-tight"
            >
              CodeAcademy
            </Link>
          </div>

          {/* CENTER (Desktop / Tablet Menu) - show from md up */}
          <nav className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 text-gray-700 gap-2 font-medium">
              <Links />
            </ul>
          </nav>

          {/* RIGHT */}
          <div className="navbar-end hidden md:flex gap-3 items-center">
            {user ? (
              <>
                <span className="text-gray-700 font-semibold truncate max-w-[10rem]">
                  {user?.displayName || user?.email}
                </span>

                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition text-sm"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-3 py-1.5 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition text-sm"
                >
                  Log In
                </Link>

                <Link
                  href="/register"
                  className="px-3 py-1.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR – FULL WIDTH */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
        role="button"
        tabIndex={open ? 0 : -1}
        aria-hidden={!open}
        aria-label="Close menu overlay"
      />

      <aside
        id="mobile-sidebar"
        className={`fixed top-0 left-0 h-full bg-white shadow-2xl z-[60] p-5 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "min(92vw, 320px)" }}
        aria-hidden={!open}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="mb-5 btn btn-sm btn-circle btn-ghost"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Sidebar Links */}
        <ul className="menu text-gray-800 text-lg font-medium space-y-2">
          <Links firstRef={firstLinkRef} />
        </ul>

        {/* Auth Buttons in Sidebar */}
        <div className="mt-6">
          {user ? (
            <button
              onClick={handleLogout}
              className="w-full py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="block w-full py-2 mb-3 rounded-lg border border-indigo-600 text-indigo-600 text-center hover:bg-indigo-50 transition"
              >
                Log In
              </Link>

              <Link
                href="/register"
                className="block w-full py-2 rounded-lg bg-indigo-600 text-white text-center hover:bg-indigo-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
