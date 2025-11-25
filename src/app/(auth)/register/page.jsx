"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { AuthContext } from "@/Context/AuthProvider";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, loginWithGoogle, loading } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password, name); // name pass করলাম
      alert("Registration Successful!");
      router.push("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      alert("Google Login Successful!");
      router.push("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1 bg-white"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition shadow-sm"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Logo" className="w-5 h-5"/>
            <span className="text-gray-700 font-semibold">Continue with Google</span>
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 font-semibold hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
}
