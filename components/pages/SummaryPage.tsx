"use client";

import { useState } from "react";
import { mockSummaries } from "@/data/mockData";
import { Summary } from "@/types";
import SummaryCard from "@/components/SummaryCard";

export default function SummaryPage() {
  const [selectedSummary, setSelectedSummary] = useState<Summary | null>(null);

  const handleSummaryClick = (summary: Summary) => {
    setSelectedSummary(summary);
  };

  return (
    <div className="p-4 lg:p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Summary
        </h1>
        <p className="text-gray-600">Access your study summaries and notes</p>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockSummaries.map((summary) => (
          <SummaryCard
            key={summary.id}
            summary={summary}
            onSummaryClick={handleSummaryClick}
          />
        ))}
      </div>

      {/* Summary Detail Modal */}
      {selectedSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedSummary.title}
              </h3>
              <button
                onClick={() => setSelectedSummary(null)}
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
                  Summary Information
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Title:</span>
                    <span className="font-semibold">
                      {selectedSummary.title}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Pages:</span>
                    <span className="font-semibold">
                      {selectedSummary.pages}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Last Edited:</span>
                    <span className="font-semibold">
                      {selectedSummary.lastEdited}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Summary Content
                </h4>
                <p className="text-gray-600">
                  This is a placeholder for the summary content. In a real
                  application, this would contain the actual summary text,
                  notes, and study materials for the selected topic.
                </p>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Read Summary
                </button>
                <button className="flex-1 bg-white text-green-600 border-2 border-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

