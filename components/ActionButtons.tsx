"use client";

interface ActionButtonsProps {
  onEditProfile: () => void;
  onManageEnrollment: () => void;
}

export default function ActionButtons({
  onEditProfile,
  onManageEnrollment,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <button
        onClick={onEditProfile}
        className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        <span>Edit profile</span>
      </button>

      <button
        onClick={onManageEnrollment}
        className="flex items-center justify-center space-x-2 bg-white text-green-600 border-2 border-green-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-50 transition-colors duration-200 text-sm sm:text-base"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="hidden sm:inline">Manage Enrolment plan</span>
        <span className="sm:hidden">Manage Plan</span>
      </button>
    </div>
  );
}
