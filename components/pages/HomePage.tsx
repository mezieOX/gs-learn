"use client";

import { useState } from "react";
import {
  mockUser,
  mockAnnouncement,
  mockRecentActivities,
} from "@/data/mockData";
import UserProfileCard from "@/components/UserProfileCard";
import AnnouncementCard from "@/components/AnnouncementCard";
import ContactDetailsCard from "@/components/ContactDetailsCard";
import ActionButtons from "@/components/ActionButtons";
import QuickAccessCard from "@/components/QuickAccessCard";
import RecentActivityItem from "@/components/RecentActivityItem";

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);

  const handleEditProfile = () => {
    if (onNavigate) {
      onNavigate("profile");
    }
  };

  const handleManageEnrollment = () => {
    setShowEnrollmentModal(true);
  };

  const handleQuickAccess = (type: string) => {
    if (onNavigate) {
      if (type === "question-banks") {
        onNavigate("question-bank-detail");
      } else {
        onNavigate(type);
      }
    }
  };

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back! Here&apos;s what&apos;s happening with your studies.
        </p>
      </div>

      {/* Top Section - User Profile and Announcement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <UserProfileCard user={mockUser} />
        <AnnouncementCard announcement={mockAnnouncement} />
      </div>

      {/* Quick Access Section */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <QuickAccessCard
            title="Courses"
            icon="📚"
            count="10 Courses"
            description="Continue your learning journey"
            onClick={() => handleQuickAccess("courses")}
          />
          <QuickAccessCard
            title="Question Banks"
            icon="📝"
            count="1000+ Questions"
            description="Practice with comprehensive question sets"
            onClick={() => handleQuickAccess("question-banks")}
          />
          <QuickAccessCard
            title="Summary"
            icon="📄"
            count="20+ Summaries"
            description="Review key concepts and notes"
            onClick={() => handleQuickAccess("summary")}
          />
        </div>
      </div>

      {/* Recent Activity Section */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
          <div className="space-y-2">
            {mockRecentActivities.map((activity) => (
              <RecentActivityItem
                key={activity.id}
                activity={activity.activity}
                time={activity.time}
                type={activity.type}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Middle Section - Contact Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContactDetailsCard user={mockUser} />
        <div className="hidden lg:block">
          {/* Empty space for layout balance */}
        </div>
      </div>

      {/* Bottom Section - Action Buttons */}
      <div className="flex justify-center lg:justify-start">
        <ActionButtons
          onEditProfile={handleEditProfile}
          onManageEnrollment={handleManageEnrollment}
        />
      </div>

      {/* Manage Enrollment Modal */}
      {showEnrollmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Manage Enrollment Plan</h3>
            <p className="text-gray-600 mb-6">
              Enrollment management functionality would be implemented here.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowEnrollmentModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowEnrollmentModal(false)}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
