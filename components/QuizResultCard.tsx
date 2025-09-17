"use client";

import { QuizResult } from "@/types";

interface QuizResultCardProps {
  quizResult: QuizResult;
}

export default function QuizResultCard({ quizResult }: QuizResultCardProps) {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "Excellent":
        return "text-green-600";
      case "Very Good":
        return "text-blue-600";
      case "Good":
        return "text-yellow-600";
      case "Fair":
        return "text-orange-600";
      case "Failed":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white border border-green-200 rounded-lg p-4">
      <h3 className="font-bold text-gray-800 mb-4">
        {quizResult.course}: {quizResult.totalQuizzes} Quiz taken
      </h3>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className={`text-sm font-medium ${getGradeColor("Excellent")}`}>
            Excellent(100-70):
          </span>
          <span className="font-semibold">{quizResult.excellent}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className={`text-sm font-medium ${getGradeColor("Very Good")}`}>
            Very Good(69-60):
          </span>
          <span className="font-semibold">{quizResult.veryGood}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className={`text-sm font-medium ${getGradeColor("Good")}`}>
            Good(59-50):
          </span>
          <span className="font-semibold">{quizResult.good}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className={`text-sm font-medium ${getGradeColor("Fair")}`}>
            Fair(49-40):
          </span>
          <span className="font-semibold">{quizResult.fair}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className={`text-sm font-medium ${getGradeColor("Failed")}`}>
            Failed(39-0):
          </span>
          <span className="font-semibold">{quizResult.failed}</span>
        </div>
      </div>
    </div>
  );
}

