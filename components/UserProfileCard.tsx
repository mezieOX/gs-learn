"use client";

import { User } from "@/types";

interface UserProfileCardProps {
  user: User;
}

export default function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <div className="bg-green-600 rounded-lg p-4 sm:p-6 text-white w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-200 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-300 rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl lg:text-3xl">👤</span>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Hello, {user.name.split(" ")[0]}!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
            <div className="bg-green-500 rounded-lg p-3 w-full">
              <span className="font-semibold">Registration No.:</span>
              <br />
              <span>{user.registrationNumber}</span>
            </div>
            <div className="bg-green-500 rounded-lg p-3 w-full">
              <span className="font-semibold">Status:</span>
              <br />
              <span>{user.status}</span>
            </div>
            <div className="bg-green-500 rounded-lg p-3 w-full">
              <span className="font-semibold">Year:</span>
              <br />
              <span>{user.year}</span>
            </div>
            <div className="bg-green-500 rounded-lg p-3 w-full">
              <span className="font-semibold">Days remaining:</span>
              <br />
              <span>{user.daysRemaining} Days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
