import Aos from "aos";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios"; // Axios import karein

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS
    Aos.init({ duration: 1000 });
  }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Email:", email, "Password:", password);

//     try {
//       const response = await Axios.post("http://127.0.0.1:8000/api/data", {
//         email,
//         password,
//       });

//       if (response.data.success) {
//         alert("Login Successful");
//         navigate("/dashboard"); 
//       } else {
//         alert("Invalid Credentials");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Error: Unable to login");
//     }
//   };

const handleSubmit = async (e) => {
    e.preventDefault();

    // Test Login Condition (Remove this in real login)
    if (email === "test@gmail.com" && password === "1234") {
      alert("Login Successful");
      navigate("/admin/dashboard"); // Navigate to Dashboard
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
