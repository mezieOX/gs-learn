"use client";

import { useState } from "react";

interface SessionSummaryProps {
  onEndSession: () => void;
  onStartNewSession: () => void;
}

export default function SessionSummary({
  onEndSession,
  onStartNewSession,
}: SessionSummaryProps) {
  const [selectedSession, setSelectedSession] = useState(
    "GST 121 (2025-04-11, 16:28)"
  );
  // Mock data - in a real app, this would come from the quiz results
  const correctAnswers = 8;
  const totalQuestions = 40;
  const correctPercentage = Math.round((correctAnswers / totalQuestions) * 100);

  const sessions = [
    "All Sessions",
    "GST 121 (2025-04-11, 16:28)",
    "GST 121 (2025-04-10, 15:04)",
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold text-gray-800">GS app</span>
        </div>

        <div className="flex items-center space-x-4">
          <button className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Session Summary */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Session Summary
          </h2>
          <p className="text-gray-600">
            You completed {totalQuestions} out of {totalQuestions} questions in
            this session
          </p>
        </div>

        {/* Question Bank Overview */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Question Bank (GST 121)
              </h3>
              <p className="text-gray-600 mb-4">
                You have 967 questions remaining
              </p>
              <button
                onClick={onStartNewSession}
                className="px-6 py-3 bg-white border border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
              >
                Start new session
              </button>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-800 mb-2">
                4% complete
              </p>
              <div className="w-32 h-2 bg-white rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-green-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Dashboard */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Exam Dashboard
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Session Selection */}
            <div className="flex-1">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  View by session
                </label>
                <select
                  value={selectedSession}
                  onChange={(e) => setSelectedSession(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {sessions.map((session) => (
                    <option key={session} value={session}>
                      {session}
                    </option>
                  ))}
                </select>
              </div>

              {/* Session List */}
              <div className="space-y-2">
                {sessions.map((session) => (
                  <button
                    key={session}
                    onClick={() => setSelectedSession(session)}
                    className={`w-full p-3 rounded-lg text-left transition-colors duration-200 ${
                      selectedSession === session
                        ? "bg-green-500 text-white"
                        : "bg-green-50 text-gray-700 hover:bg-green-100"
                    }`}
                  >
                    {session}
                  </button>
                ))}
              </div>
            </div>

            {/* Performance Chart */}
            <div className="flex-1 flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="8"
                    strokeDasharray={`${correctPercentage * 2.51} 251`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800">
                    {correctPercentage}%
                  </span>
                  <span className="text-sm text-gray-600">Correct answers</span>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-600">
                    {correctPercentage}% Correct answers
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <span className="text-sm text-gray-600">
                    {100 - correctPercentage}% Incorrect answers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onEndSession}
            className="flex-1 px-6 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
          >
            End Session
          </button>
          <button
            onClick={onStartNewSession}
            className="flex-1 px-6 py-4 bg-white border border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
          >
            Start New Session
          </button>
        </div>
      </div>
    </div>
  );
}
