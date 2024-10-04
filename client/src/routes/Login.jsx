
import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import LoginForm from './LoginForm';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (username, password) => {
    try {
      const response = await fetch("http://localhost:5002/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const res = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 400));

      if (response.status !== 200) {
        if (res.err_code === "INVALID_CREDENTIALS") {
          toast.error("Invalid credentials");
        } else {
          toast.error("Login failed");
        }
        return;
      }

      localStorage.setItem("token", res.token);
      toast.success("Logged in successfully. Redirecting...");
      setTimeout(() => navigate("/"), 2000); // Redirect to home page after 2 seconds
    } catch (error) {
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
