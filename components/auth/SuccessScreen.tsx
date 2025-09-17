"use client";

import { useEffect, useState } from "react";

interface SuccessScreenProps {
  title: string;
  message: string;
  buttonText: string;
  onContinue: () => void;
  showLoading?: boolean;
}

export default function SuccessScreen({
  title,
  message,
  buttonText,
  onContinue,
  showLoading = false,
}: SuccessScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (showLoading) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(onContinue, 1000); // Auto continue after loading
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [showLoading, onContinue]);

  return (
    <div className="p-8 text-center">
      <div className="w-full max-w-md mx-auto">
        {/* Success Icon with Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto relative">
            {/* Decorative circles */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-300 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-100"></div>
            <div className="absolute top-1 -left-3 w-2 h-2 bg-green-300 rounded-full animate-pulse delay-200"></div>
            <div className="absolute -bottom-2 right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300"></div>

            {/* Main checkmark */}
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-green-600 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">{message}</p>

        {/* Loading Animation */}
        {showLoading && (
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto relative">
              <div className="w-full h-full border-4 border-gray-200 rounded-full"></div>
              <div
                className="absolute top-0 left-0 w-full h-full border-4 border-green-500 rounded-full border-t-transparent"
                style={{
                  transform: `rotate(${progress * 3.6}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Please wait a moment while the app is preparing...
            </p>
          </div>
        )}

        {!showLoading && (
          <button
            onClick={onContinue}
            className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
