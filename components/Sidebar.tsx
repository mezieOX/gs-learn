"use client";

import { useState } from "react";
import { navigationItems } from "@/data/mockData";

interface SidebarProps {
  activeItem: string;
  onNavigate: (path: string) => void;
}

export default function Sidebar({ activeItem, onNavigate }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-green-600 text-white p-2 rounded-md shadow-lg hover:bg-green-700 transition-colors duration-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-green-600 text-white
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:block
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo section */}
          <div className="p-6 border-b border-green-500">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
              <span className="text-xl font-bold">GS App</span>
            </div>
          </div>

          {/* Navigation items */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => {
              // Check if current page matches this navigation item
              const isActive =
                activeItem === item.id ||
                activeItem === item.path ||
                (activeItem === "homepage" && item.id === "homepage") ||
                (activeItem === "/" && item.id === "homepage");
              const isUtility = ["help", "settings", "logout"].includes(
                item.id
              );
              const isLogout = item.id === "logout";

              return (
                <div key={item.id}>
                  {isUtility && item.id === "settings" && (
                    <div className="border-t border-green-500 my-4"></div>
                  )}
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                      ${
                        isActive
                          ? "bg-green-800 text-white border-l-4 border-white"
                          : isLogout
                          ? "text-red-500 hover:bg-red-600 hover:text-white"
                          : "text-green-100 hover:bg-green-500 hover:text-white"
                      }
                    `}
                  >
                    {isLogout ? (
                      <svg
                        className="w-5 h-5"
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
                    ) : (
                      <span className="text-lg">{item.icon}</span>
                    )}
                    <span className="font-medium">{item.label}</span>
                  </button>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
