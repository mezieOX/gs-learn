"use client";

import Image from "next/image";

interface OnboardingScreenProps {
  onGetStarted: () => void;
  onAlreadyHaveAccount: () => void;
}

export default function OnboardingScreen({
  onGetStarted,
  onAlreadyHaveAccount,
}: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Illustration */}
        <div className="flex justify-between lg:justify-start">
          <div className="relative w-full max-w-md">
            <Image
              src="/images/desktop-welcome-screen.png"
              alt="General Studies Made Easy - Welcome Illustration"
              width={700}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-center lg:text-right space-y-8">
          <h1 className="text-3xl lg:text-5xl text-center font-bold text-black">
            General Studies Made Easy
          </h1>

          {/* Action Buttons */}
          <div className="space-y-4 lg:pt-10">
            <button
              onClick={onGetStarted}
              className="w-full px-12 py-4 bg-green-500 text-white text-sm font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200"
            >
              GET STARTED
            </button>

            <button
              onClick={onAlreadyHaveAccount}
              className="w-full px-12 py-4 bg-green-100 text-green-800 text-sm font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-green-200 transition-colors duration-200"
            >
              I ALREADY HAVE AN ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
