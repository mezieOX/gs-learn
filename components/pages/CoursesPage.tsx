"use client";

import { useState } from "react";
import { mockCourses } from "@/data/mockData";
import { Course } from "@/types";
import CourseCard from "@/components/CourseCard";

interface CoursesPageProps {
  onNavigate?: (path: string) => void;
}

export default function CoursesPage({ onNavigate }: CoursesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = mockCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleStartCourse = (course: Course) => {
    console.log("Starting course:", course.title);
    // Close the modal
    setSelectedCourse(null);
    // Navigate to course-specific content (for now, navigate to question banks as courses contain questions)
    if (onNavigate) {
      onNavigate("question-banks");
    }
  };

  const handleViewDetails = (course: Course) => {
    console.log("Viewing details for:", course.title);
    // Close the modal since the detailed information is already displayed
    setSelectedCourse(null);
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-0">
            Courses
          </h1>
          <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm text-gray-600">
              {filteredCourses.length} Contents
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
          />
          <svg
            className="absolute right-3 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onCourseClick={handleCourseClick}
          />
        ))}
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-lg p-4 sm:p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 pr-4">
                {selectedCourse.title}
              </h3>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                    Course Statistics
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-600">
                        Enrolled Students:
                      </span>
                      <span className="font-semibold text-xs sm:text-sm">
                        {selectedCourse.enrolled}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-600">
                        Total Questions:
                      </span>
                      <span className="font-semibold text-xs sm:text-sm">
                        {selectedCourse.questions}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs sm:text-sm text-gray-600">
                        Last Edited:
                      </span>
                      <span className="font-semibold text-xs sm:text-sm">
                        {selectedCourse.lastEdited}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                    Progress
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span>Accuracy</span>
                        <span>{selectedCourse.accuracy}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${selectedCourse.accuracy}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span>Completion</span>
                        <span>{selectedCourse.completionRate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${selectedCourse.completionRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => handleStartCourse(selectedCourse)}
                  className="flex-1 bg-green-600 text-white px-4 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  Start Course
                </button>
                <button
                  onClick={() => handleViewDetails(selectedCourse)}
                  className="flex-1 bg-white text-green-600 border-2 border-green-600 px-4 py-2 sm:py-3 rounded-lg hover:bg-green-50 transition-colors text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
