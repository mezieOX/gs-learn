"use client";

import { useState } from "react";

interface ForgotPasswordScreenProps {
  onForgotPassword: (email: string) => void;
  onBackToSignIn: () => void;
}

export default function ForgotPasswordScreen({
  onForgotPassword,
  onBackToSignIn,
}: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState("kachi.osuji@yourdomain.com");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const validateEmail = (): boolean => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail()) {
      onForgotPassword(email);
    }
  };

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Forgot Password 🔑
        </h1>
        <p className="text-gray-600">
          Enter your email address to get an OTP code to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            className={`w-full px-0 py-3 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none focus:border-green-500 ${
              error ? "border-red-500" : "border-green-500"
            }`}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
        >
          Continue
        </button>
      </form>

      <p className="text-center text-gray-600 mt-6">
        Remember your password?{" "}
        <button
          onClick={onBackToSignIn}
          className="text-green-600 hover:underline font-medium"
        >
          Back to Sign In
        </button>
      </p>
    </div>
  );
}
