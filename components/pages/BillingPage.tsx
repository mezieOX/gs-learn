"use client";

import { useState } from "react";

interface BillingPageProps {
  onBack: () => void;
}

export default function BillingPage({ onBack }: BillingPageProps) {
  const [currentPlan, setCurrentPlan] = useState("student");

  const billingHistory = [
    { id: "0012", date: "14 Apr", amount: "₦20,000" },
    { id: "0013", date: "13 Mar", amount: "₦20,000" },
    { id: "0014", date: "11 Feb", amount: "₦20,000" },
    { id: "0015", date: "15 Jan", amount: "₦20,000" },
    { id: "0016", date: "15 Dec", amount: "₦20,000" },
    { id: "0017", date: "14 Nov", amount: "₦20,000" },
    { id: "0018", date: "13 Oct", amount: "₦20,000" },
    { id: "0019", date: "11 Sep", amount: "₦20,000" },
    { id: "0020", date: "15 Aug", amount: "₦20,000" },
  ];

  const handleUpgrade = () => {
    setCurrentPlan("scholar");
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Plans & Billings
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage your enrolment plans and history
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Student Plan */}
          <div
            className={`relative border-2 rounded-lg p-4 sm:p-6 ${
              currentPlan === "student"
                ? "bg-green-50 border-green-500"
                : "bg-white border-green-200"
            }`}
          >
            {currentPlan === "student" && (
              <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Renew in 14 days
              </div>
            )}

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Student Plan
            </h3>
            <div className="text-3xl font-bold text-gray-800 mb-4">
              ₦20,000{" "}
              <span className="text-lg font-normal text-gray-600">
                per month
              </span>
            </div>

            <div className="space-y-3 mb-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                  <span className="text-gray-700">
                    Access to 1,500 worth of questions
                  </span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                currentPlan === "student"
                  ? "bg-green-500 text-white"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }`}
              disabled={currentPlan === "student"}
            >
              {currentPlan === "student" ? "Current Plan" : "Select Plan"}
            </button>
          </div>

          {/* Scholar Plan */}
          <div
            className={`relative border-2 rounded-lg p-6 ${
              currentPlan === "scholar"
                ? "bg-green-50 border-green-500"
                : "bg-white border-green-200"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Scholar Plan
            </h3>
            <div className="text-3xl font-bold text-gray-800 mb-4">
              ₦40,000{" "}
              <span className="text-lg font-normal text-gray-600">
                per month
              </span>
            </div>

            <div className="space-y-3 mb-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                  <span className="text-gray-700">
                    Unlimited access to questions
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleUpgrade}
              className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                currentPlan === "scholar"
                  ? "bg-green-500 text-white"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }`}
              disabled={currentPlan === "scholar"}
            >
              {currentPlan === "scholar" ? "Current Plan" : "Upgrade Plan"}
            </button>
          </div>
        </div>

        {/* Billing History */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Billing history
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Most recent</span>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <button className="text-green-600 hover:text-green-700 font-medium">
                View all
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {billingHistory.map((invoice, index) => (
              <div
                key={invoice.id}
                className={`flex items-center justify-between p-4 ${
                  index !== billingHistory.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-800">
                    Invoice {invoice.id}
                  </span>
                </div>
                <span className="text-gray-600">{invoice.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
