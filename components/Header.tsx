"use client";

interface HeaderProps {
  currentPage: string;
  onNavigate?: (path: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  // Get page title based on current page
  const getPageTitle = () => {
    switch (currentPage) {
      case "homepage":
      case "/":
        return "Dashboard";
      case "courses":
      case "/courses":
        return "Courses";
      case "question-banks":
      case "/question-banks":
        return "Question Banks";
      case "summary":
      case "/summary":
        return "Summary";
      case "profile":
      case "/profile":
        return "Profile";
      case "billing":
      case "/billing":
        return "Billing";
      case "settings":
      case "/settings":
        return "Settings";
      default:
        return "GS App";
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and App Name */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-600 rounded-full"></div>
            </div>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-green-600">
              GS app
            </h1>
          </div>
        </div>

        {/* Page Title - Hidden on mobile, shown on larger screens */}
        <div className="hidden md:block">
          <h2 className="text-lg font-semibold text-gray-800">
            {getPageTitle()}
          </h2>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Notifications */}
          <button
            className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
            title="Notifications"
          ></button>

          {/* Settings */}
          <button
            onClick={() => onNavigate && onNavigate("settings")}
            className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
            title="Settings"
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>

          {/* User Profile */}
          <button
            onClick={() => onNavigate && onNavigate("profile")}
            className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
            title="View Profile"
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Page Title */}
      <div className="md:hidden mt-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {getPageTitle()}
        </h2>
      </div>
    </header>
  );
}
