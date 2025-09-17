"use client";

interface EmailSentScreenProps {
  email: string;
  onOpenEmailApp: () => void;
  onBackToSignIn: () => void;
}

export default function EmailSentScreen({
  email,
  onOpenEmailApp,
  onBackToSignIn,
}: EmailSentScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          You&apos;ve got mail!
        </h1>

        <p className="text-gray-600 mb-8">
          We&apos;ve sent a password reset link to{" "}
          <span className="font-semibold text-gray-800">{email}</span>
        </p>

        <div className="space-y-4">
          <button
            onClick={onOpenEmailApp}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            Open Email App
          </button>

          <button
            onClick={onBackToSignIn}
            className="w-full bg-white text-green-600 border-2 border-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
          >
            Back to Sign In
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Didn&apos;t receive the email? Check your spam folder or{" "}
          <button className="text-green-600 hover:underline">try again</button>
        </p>
      </div>
    </div>
  );
}

