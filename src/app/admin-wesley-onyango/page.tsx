"use client"
import { useState } from "react";
import axios from "axios";
import {toast} from "sonner"
import {useRouter} from "next/navigation";
function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
        const response = await axios.post("/api/signin", formData);
        console.log(response.data);
        if (response.status === 200) {
            toast.success("signin successfully");
            router.push("/admin-manager");
        } else {
            toast.error("signin failed");
        }
        // Handle success response
        // Redirect or show a success message
    } catch (error) {
        setError("Invalid credentials. Please try again.");
    }

    setLoading(false);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
          <p className="text-gray-500">Sign in to your admin account</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-3 border text-black border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border text-black border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* <div className="text-center mt-4 text-sm text-gray-500">
          Forgot your password? <a href="#" className="text-indigo-600">Reset here</a>
        </div> */}
      </div>
    </div>
  );
}

export default AdminLogin;
