"use client";

import { Course } from "@/types";

interface CourseCardProps {
  course: Course;
  onCourseClick: (course: Course) => void;
}

export default function CourseCard({ course, onCourseClick }: CourseCardProps) {
  return (
    <div
      className="bg-green-50 rounded-lg p-3 sm:p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={() => onCourseClick(course)}
    >
      {/* Enrolled Badge */}
      <div className="flex justify-between items-start mb-2 sm:mb-3">
        <div className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
          {course.enrolled} Enrolled
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Course Image */}
      <div className="w-full h-24 sm:h-28 lg:h-32 bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-amber-400 rounded-full flex items-center justify-center">
          <span className="text-xl sm:text-2xl">📚</span>
        </div>
      </div>

      {/* Course Title */}
      <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
        {course.title}
      </h3>

      {/* Progress Indicators */}
      <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm text-gray-600">Accuracy</span>
          <span className="text-xs sm:text-sm font-semibold text-gray-800">
            {course.accuracy}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
          <div
            className="bg-green-600 h-1.5 sm:h-2 rounded-full transition-all duration-300"
            style={{ width: `${course.accuracy}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm text-gray-600">
            Completion Rate
          </span>
          <span className="text-xs sm:text-sm font-semibold text-gray-800">
            {course.completionRate}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
          <div
            className="bg-green-600 h-1.5 sm:h-2 rounded-full transition-all duration-300"
            style={{ width: `${course.completionRate}%` }}
          ></div>
        </div>
      </div>

      {/* Course Metadata */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
        <div className="flex items-center space-x-1">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span>Edited {course.lastEdited}</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <span>{course.questions} Questions</span>
        </div>
      </div>
    </div>
  );
}
