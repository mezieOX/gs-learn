"use client";

import { useState } from "react";

interface QuestionBankDetailProps {
  onBack: () => void;
  onStartQuiz: () => void;
}

export default function QuestionBankDetail({
  onBack,
  onStartQuiz,
}: QuestionBankDetailProps) {
  const [numberOfQuestions, setNumberOfQuestions] = useState(40);
  const [questionRange, setQuestionRange] = useState("1,2,3,4,5,6,7,8,9,10");
  const [questionType, setQuestionType] = useState(
    "Show me new questions only"
  );
  const [showChapterModal, setShowChapterModal] = useState(false);
  const [showQuestionTypeDropdown, setShowQuestionTypeDropdown] =
    useState(false);

  const questionTypes = [
    "Show me new questions only",
    "Repeat questions marked incorrect",
    "Repeat questions using hint",
    "Repeat questions answered before",
  ];

  const handleStartQuestions = () => {
    onStartQuiz();
  };

  const handleChapterSelection = () => {
    setShowChapterModal(true);
  };

  const handleQuestionTypeChange = (type: string) => {
    setQuestionType(type);
    setShowQuestionTypeDropdown(false);
  };

  const handleQuestionRangeChange = (value: string) => {
    // Validate and format the question range input
    const cleanedValue = value.replace(/[^0-9,\s-]/g, ""); // Only allow numbers, commas, spaces, and hyphens
    setQuestionRange(cleanedValue);
  };

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
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1 0-15 0v5h5l-5 5-5-5h5v-5a10 10 0 1 1 20 0v5z"
              />
            </svg>
          </button>
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Course Navigation */}
      <div className="mb-6">
        <div className="flex space-x-2 text-sm">
          <span className="text-green-600 underline">Courses</span>
          <span className="text-gray-400">Courses</span>
          <span className="text-gray-400">Courses</span>
          <span className="text-gray-400">Courses</span>
          <span className="text-gray-400">Courses</span>
          <span className="text-gray-400">Courses</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-gray-600">Question Banks</span>
          <svg
            className="w-4 h-4 text-gray-400"
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
          <span className="text-gray-800 font-medium">GST 121</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Overview */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-1 h-12 bg-green-500 rounded"></div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">GS 121</h2>
                  <p className="text-gray-600">891 Questions</p>
                </div>
              </div>
            </div>

            {/* Start New Session */}
            <div className="bg-white border border-green-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Start new session
              </h3>

              <div className="space-y-6">
                {/* Number of Questions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Questions
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-green-200 rounded-lg overflow-hidden">
                      <input
                        type="number"
                        value={numberOfQuestions}
                        onChange={(e) =>
                          setNumberOfQuestions(parseInt(e.target.value) || 0)
                        }
                        className="w-20 px-3 py-2 bg-green-50 border-0 focus:ring-0 focus:outline-none text-center"
                        min="1"
                        max="1007"
                      />
                      <div className="flex flex-col">
                        <button
                          onClick={() =>
                            setNumberOfQuestions(
                              Math.min(numberOfQuestions + 1, 1007)
                            )
                          }
                          className="px-2 py-1 bg-green-100 hover:bg-green-200 transition-colors"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() =>
                            setNumberOfQuestions(
                              Math.max(numberOfQuestions - 1, 1)
                            )
                          }
                          className="px-2 py-1 bg-green-100 hover:bg-green-200 transition-colors"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <span className="text-gray-600">Of 1007</span>
                  </div>
                </div>

                {/* Question Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Range
                  </label>
                  <div className="flex items-center border border-green-200 rounded-lg overflow-hidden">
                    <input
                      type="text"
                      value={questionRange}
                      onChange={(e) =>
                        handleQuestionRangeChange(e.target.value)
                      }
                      className="flex-1 px-3 py-2 bg-green-50 border-0 focus:ring-0 focus:outline-none"
                      placeholder="1,2,3,4,5,6,7,8,9,10 or 1-10"
                    />
                    <button className="px-3 py-2 bg-green-100 hover:bg-green-200 transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Question Type Dropdown */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Type
                  </label>
                  <button
                    onClick={() =>
                      setShowQuestionTypeDropdown(!showQuestionTypeDropdown)
                    }
                    className="w-full flex items-center justify-between px-3 py-2 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <span className="text-gray-800">{questionType}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        showQuestionTypeDropdown ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {showQuestionTypeDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-green-200 rounded-lg shadow-lg z-10">
                      {questionTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => handleQuestionTypeChange(type)}
                          className={`w-full px-3 py-2 text-left hover:bg-green-50 transition-colors ${
                            questionType === type
                              ? "bg-green-100 text-green-800"
                              : "text-gray-800"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Start Questions Button */}
                <button
                  onClick={handleStartQuestions}
                  className="w-full py-3 bg-white border border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
                >
                  Start the questions
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Advertisements */}
          <div className="space-y-6">
            <div className="bg-white border border-green-200 rounded-lg p-8 flex items-center justify-center">
              <span className="text-gray-400 text-sm transform rotate-45">
                Advertisement
              </span>
            </div>
            <div className="bg-green-100 border border-green-200 rounded-lg p-8 flex items-center justify-center">
              <span className="text-gray-400 text-sm transform rotate-45">
                Advertisement
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Selection Modal */}
      {showChapterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Chapter Selection
            </h3>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Chapters</span>
              <button className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-800 rounded">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>All</span>
              </button>
            </div>

            <div className="grid grid-cols-10 gap-2 mb-6">
              {Array.from({ length: 21 }, (_, i) => i + 1).map((chapter) => (
                <button
                  key={chapter}
                  className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                    chapter <= 10 && chapter !== 2
                      ? "bg-green-500 text-white"
                      : "bg-white border border-green-200 text-gray-700 hover:bg-green-50"
                  }`}
                >
                  {chapter}
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowChapterModal(false)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
