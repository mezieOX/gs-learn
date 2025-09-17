"use client";

import { ReactNode } from "react";

interface ModalWrapperProps {
  children: ReactNode;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export default function ModalWrapper({
  children,
  onClose,
  showCloseButton = true,
}: ModalWrapperProps) {
  return (
    <div className="fixed inset-0 bg-gray-100/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative">
        {showCloseButton && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
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
        )}
        {children}
      </div>
    </div>
  );
}
