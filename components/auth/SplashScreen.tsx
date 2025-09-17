"use client";

import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before transitioning
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Main Content */}
      <div className="text-center">
        {/* App Logo/Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="w-full h-full border-2 border-gray-800 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Animated wave effect */}
            <div
              className="absolute inset-0 border-2 border-green-500 rounded-full"
              style={{
                clipPath: `polygon(0 ${100 - progress}%, 100% ${
                  100 - progress
                }%, 100% 100%, 0% 100%)`,
                transition: "clip-path 0.1s ease-out",
              }}
            ></div>
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">GST APP</h1>

        {/* Loading Text */}
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
}
