"use client";

import Image from "next/image";

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onAlreadyHaveAccount: () => void;
}

export default function WelcomeScreen({
  onGetStarted,
  onAlreadyHaveAccount,
}: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Visual */}
        <div className="text-center lg:text-left">
          <div className="relative">
            <Image
              src="/images/desktop-welcome-screen.png"
              alt="General Studies Made Easy - Welcome Illustration"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            General Studies Made Easy
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your comprehensive learning platform for mastering General Studies
            courses with interactive content, practice tests, and personalized
            study plans.
          </p>

          {/* Welcome Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to GS App
            </h2>

            <p className="text-gray-600 mb-6">
              Join thousands of students who are already excelling in their
              General Studies courses with our comprehensive learning platform.
            </p>

            <button
              onClick={onGetStarted}
              className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
