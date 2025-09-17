"use client";

import { useState } from "react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizScreenProps {
  onFinishSession: () => void;
  onPreviousQuestion: () => void;
  onNextQuestion: () => void;
  onExitQuiz: () => void;
}

export default function QuizScreen({
  onFinishSession,
  onPreviousQuestion,
  onNextQuestion,
  onExitQuiz,
}: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({});
  const [showExitModal, setShowExitModal] = useState(false);
  const totalQuestions = 40;

  const mockQuestion: QuizQuestion = {
    id: 1,
    question:
      "As a trailblazer in Nollywood and TV drama, he has garnered numerous accolades, including the Africa Movie Academy Award for Best Actor in a Leading Role in 2008 in the film Stronger Than Pain. As a celebration. May his infectious spirit continue to inspire the younger generation of entertainers, who already love creating 'content' on social media, the President adds",
    options: [
      "As a trailblazer in Nollywood and TV drama, he has garnered numerous accolades,",
      "As a trailblazer in Nollywood and TV drama, he has garnered numerous accolades,",
      "As a trailblazer in Nollywood and TV drama, he has garnered numerous accolades,",
      "As a trailblazer in Nollywood and TV drama, he has garnered numerous accolades,",
      "As a trailblazer in Nollywood and TV drama, he has garnered numerous accolades,",
    ],
    correctAnswer: 0,
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answerIndex }));
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      const newQuestion = currentQuestion - 1;
      setCurrentQuestion(newQuestion);
      setSelectedAnswer(answers[newQuestion] || null);
    }
    onPreviousQuestion();
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      const newQuestion = currentQuestion + 1;
      setCurrentQuestion(newQuestion);
      setSelectedAnswer(answers[newQuestion] || null);
    }
    onNextQuestion();
  };

  const handleFinish = () => {
    onFinishSession();
  };

  const handleExitClick = () => {
    setShowExitModal(true);
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    onExitQuiz();
  };

  const handleCancelExit = () => {
    setShowExitModal(false);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full"></div>
          </div>
          <span className="text-lg sm:text-xl font-bold text-gray-800">
            GS app
          </span>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-base sm:text-lg font-semibold text-gray-700">
            {currentQuestion} of {totalQuestions}
          </span>
          <div className="flex space-x-1 sm:space-x-2">
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
            <button
              onClick={handleExitClick}
              className="w-8 h-8 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors duration-200"
              title="Exit Quiz"
            >
              <svg
                className="w-4 h-4 text-red-600"
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
        </div>
      </div>

      {/* Question */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            {mockQuestion.question}
          </p>
        </div>

        {/* Answer Options */}
        <div className="space-y-2 sm:space-y-3">
          {mockQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedAnswer === index
                  ? "bg-green-500 border-green-500 text-white"
                  : "bg-green-50 border-green-200 text-gray-800 hover:bg-green-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm sm:text-base font-semibold ${
                      selectedAnswer === index
                        ? "bg-white text-green-500"
                        : "bg-green-200 text-green-700"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-left text-sm sm:text-base">
                    {option}
                  </span>
                </div>
                {selectedAnswer === index && (
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0"
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
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 1}
            className={`px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
              currentQuestion === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-sm sm:text-base">Previous Question</span>
            </div>
          </button>

          {currentQuestion === totalQuestions ? (
            <button
              onClick={handleFinish}
              className="px-4 sm:px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm sm:text-base">Finish Session</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 sm:px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm sm:text-base">Next Question</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Exit Quiz?
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              Are you sure you want to exit the quiz? Your progress will be
              saved, but you&apos;ll need to restart from the beginning.
            </p>

            <div className="flex space-x-3">
              <button
                onClick={handleCancelExit}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmExit}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
              >
                Exit Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
