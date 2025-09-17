"use client";

import { QuestionBank } from "@/types";

interface QuestionBankCardProps {
  questionBank: QuestionBank;
  onSemesterClick: (semester: QuestionBank) => void;
}

export default function QuestionBankCard({
  questionBank,
  onSemesterClick,
}: QuestionBankCardProps) {
  return (
    <div
      className="bg-white border border-green-200 rounded-lg p-4 sm:p-6 cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={() => onSemesterClick(questionBank)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
              {questionBank.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              {questionBank.totalQuestions} Questions
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
          <span className="text-xs sm:text-sm text-gray-500 hidden sm:inline">
            View
          </span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"
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
        </div>
      </div>
    </div>
  );
}
