"use client";

import { useState, useRef, useEffect } from "react";

interface OTPVerificationScreenProps {
  email: string;
  onVerifyOTP: (otp: string) => void;
  onResendOTP: () => void;
  onBack: () => void;
}

export default function OTPVerificationScreen({
  email,
  onVerifyOTP,
  onResendOTP,
  onBack,
}: OTPVerificationScreenProps) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every((digit) => digit !== "") && newOtp.join("").length === 4) {
      onVerifyOTP(newOtp.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setCountdown(60);
    setCanResend(false);
    onResendOTP();
  };

  const handleSubmit = () => {
    const otpString = otp.join("");
    if (otpString.length === 4) {
      onVerifyOTP(otpString);
    }
  };

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          You&apos;ve got mail 📧
        </h1>
        <p className="text-gray-600">
          We have sent the OTP verification code to your email address. Check
          your email and enter the code below.
        </p>
      </div>

      {/* OTP Input Fields */}
      <div className="flex justify-center space-x-4 mb-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={`
              w-16 h-16 text-center text-2xl font-bold border-2 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-green-500
              ${digit ? "border-green-500 bg-green-50" : "border-gray-300"}
              transition-colors duration-200
            `}
          />
        ))}
      </div>

      {/* Resend Section */}
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-2">Didn&apos;t receive email?</p>
        {canResend ? (
          <button
            onClick={handleResend}
            className="text-green-600 hover:underline font-medium"
          >
            Resend code
          </button>
        ) : (
          <p className="text-gray-500">
            You can resend code in{" "}
            <span className="text-green-600 font-semibold">{countdown}s</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={otp.join("").length !== 4}
        className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Confirm
      </button>
    </div>
  );
}
