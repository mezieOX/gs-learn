"use client";

import { useState } from "react";
import { mockQuestionBanks } from "@/data/mockData";
import { QuestionBank } from "@/types";
import QuestionBankCard from "@/components/QuestionBankCard";

interface QuestionBanksPageProps {
  onNavigate?: (path: string) => void;
}

export default function QuestionBanksPage({
  onNavigate,
}: QuestionBanksPageProps) {
  const [selectedSemester, setSelectedSemester] = useState<QuestionBank | null>(
    null
  );

  const handleSemesterClick = (semester: QuestionBank) => {
    setSelectedSemester(semester);
  };

  const handleStartPractice = () => {
    if (onNavigate) {
      onNavigate("question-bank-detail");
    }
    setSelectedSemester(null);
  };

  const handleViewAllQuestions = () => {
    console.log("Viewing all questions for:", selectedSemester?.title);
    // Navigate to question bank detail page to view all questions
    if (onNavigate && selectedSemester) {
      onNavigate("question-bank-detail");
    }
    setSelectedSemester(null);
  };

  return (
    <div className="p-4 lg:p-6">
      {/* Question Banks Banner */}
      <div className="bg-green-600 rounded-lg p-6 text-white mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Question Banks</h1>
        <p className="text-green-100 text-lg">
          {mockQuestionBanks.reduce(
            (total, bank) => total + bank.totalQuestions,
            0
          )}{" "}
          Questions
        </p>
      </div>

      {/* Exams Section */}
      <div className="bg-white border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-start space-x-4">
          <div className="w-1 h-12 bg-green-600 rounded-full flex-shrink-0"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Exams</h2>
            <p className="text-gray-600">
              Pick from any of the courses to test your knowledge skills.
            </p>
          </div>
        </div>
      </div>

      {/* Semester Cards */}
      <div className="space-y-4">
        {mockQuestionBanks.map((questionBank) => (
          <QuestionBankCard
            key={questionBank.id}
            questionBank={questionBank}
            onSemesterClick={handleSemesterClick}
          />
        ))}
      </div>

      {/* Advertisement Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
        <div className="bg-white border border-green-200 rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center min-h-[150px] sm:min-h-[200px]">
          <div className="transform -rotate-12">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">
              Advertisement
            </span>
          </div>
        </div>
        <div className="bg-white border border-green-200 rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center min-h-[150px] sm:min-h-[200px]">
          <div className="transform -rotate-12">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">
              Advertisement
            </span>
          </div>
        </div>
      </div>

      {/* Semester Detail Modal */}
      {selectedSemester && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSemester(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedSemester.title}
              </h3>
              <button
                onClick={() => setSelectedSemester(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Semester Information
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Semester:</span>
                    <span className="font-semibold">
                      {selectedSemester.title}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Total Questions:
                    </span>
                    <span className="font-semibold">
                      {selectedSemester.totalQuestions}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Available Topics
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "GS 101",
                    "GS 102",
                    "GS 103",
                    "GS 104",
                    "GS 105",
                    "GS 106",
                  ].map((topic) => (
                    <div
                      key={topic}
                      className="bg-white p-2 rounded border text-sm"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleStartPractice}
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Start Practice
                </button>
                <button
                  onClick={handleViewAllQuestions}
                  className="flex-1 bg-white text-green-600 border-2 border-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
                >
                  View All Questions
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
