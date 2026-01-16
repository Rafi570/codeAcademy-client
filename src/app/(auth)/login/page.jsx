"use client";

import { useContext, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { AuthContext } from "@/Context/AuthProvider"; 
import { useRouter } from "next/navigation";

export default function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loginWithGoogle, loading } = useContext(AuthContext);

  // ---------------------
  // Email + Password Login
  // ---------------------
  const handleLog = async (e) => {
    e.preventDefault();

    try {
      const userData = await login(email, password);
      Cookies.set("auth", JSON.stringify(userData), { expires: 1 });
      alert("Login Successful!");
      router.push("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // ---------------------
  // Google Login
  // ---------------------
  const handleGoogle = async () => {
    try {
      const userData = await loginWithGoogle();
      Cookies.set("auth", JSON.stringify(userData), { expires: 1 });
      alert("Google Login Successful!");
      router.push("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // ---------------------
  // Demo Login
  // ---------------------
  const handleDemo = async () => {
    try {
      const demoEmail = "admin570@gmail.com";
      const demoPassword = "Rafi570@";

      const userData = await login(demoEmail, demoPassword);
      Cookies.set("auth", JSON.stringify(userData), { expires: 1 });
      alert("Demo Login Successful!");
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("Demo login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
          Log In
        </h2>

        <form className="space-y-4" onSubmit={handleLog}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="input input-bordered w-full mt-1 bg-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="input input-bordered w-full mt-1 bg-white"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-indigo-600 border-none hover:bg-indigo-700 text-white"
          >
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>

        {/* Google Login Button */}
        <div className="mt-4">
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition shadow-sm"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google Logo"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-semibold">
              Continue with Google
            </span>
          </button>
        </div>

        {/* Demo Login Button */}
        <div className="mt-4">
          <button
            onClick={handleDemo}
            className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition shadow-sm"
          >
            Demo Login
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
