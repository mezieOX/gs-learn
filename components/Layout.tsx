"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useAuth } from "@/contexts/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (path: string) => void;
}

export default function Layout({
  children,
  currentPage,
  onNavigate,
}: LayoutProps) {
  const [activeItem, setActiveItem] = useState(currentPage);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { logout } = useAuth();

  // Sync activeItem with currentPage prop
  useEffect(() => {
    setActiveItem(currentPage);
  }, [currentPage]);

  const handleNavigation = (path: string) => {
    if (path === "logout" || path === "/logout") {
      setShowLogoutModal(true);
      return;
    }
    setActiveItem(path);
    onNavigate(path);
    // In a real app, you would use Next.js router here
    // router.push(path);
  };

  const handleConfirmLogout = () => {
    logout();
    setShowLogoutModal(false);
    onNavigate("homepage");
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar activeItem={activeItem} onNavigate={handleNavigation} />

        {/* Main Content */}
        <div className="flex-1 lg:ml-64 min-h-screen">
          <Header currentPage={currentPage} onNavigate={handleNavigation} />
          <main className="min-h-screen pb-4">{children}</main>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-md w-full mx-4">
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
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Logout
              </h3>
            </div>

            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Are you sure you want to logout? You&apos;ll need to sign in again to
              access your account.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={handleCancelLogout}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmLogout}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors duration-200 text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
