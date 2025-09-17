"use client";

import { Summary } from "@/types";

interface SummaryCardProps {
  summary: Summary;
  onSummaryClick: (summary: Summary) => void;
}

export default function SummaryCard({
  summary,
  onSummaryClick,
}: SummaryCardProps) {
  return (
    <div
      className="bg-green-50 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={() => onSummaryClick(summary)}
    >
      {/* Summary Image */}
      <div className="w-full h-32 bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg mb-4 flex items-center justify-center">
        <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center">
          <span className="text-2xl">📄</span>
        </div>
      </div>

      {/* Summary Title */}
      <h3 className="font-bold text-gray-800 mb-3 line-clamp-2">
        {summary.title}
      </h3>

      {/* Summary Metadata */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span>Edited {summary.lastEdited}</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
          <span>{summary.pages} Pages</span>
        </div>
      </div>
    </div>
  );
}

