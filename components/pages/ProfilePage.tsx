"use client";

import { useState } from "react";
import { mockUser, mockQuizResults } from "@/data/mockData";
import QuizResultCard from "@/components/QuizResultCard";

interface ProfilePageProps {
  onNavigate?: (path: string) => void;
}

export default function ProfilePage({ onNavigate }: ProfilePageProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.phone,
    address: mockUser.address,
    department: mockUser.department,
    faculty: mockUser.faculty,
  });

  const handleLogout = () => {
    if (onNavigate) {
      onNavigate("logout");
    }
  };

  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = () => {
    // Handle save logic here
    console.log("Saving profile:", formData);
    setShowEditModal(false);
  };

  const handleCancelEdit = () => {
    // Reset form data to original values
    setFormData({
      name: mockUser.name,
      email: mockUser.email,
      phone: mockUser.phone,
      address: mockUser.address,
      department: mockUser.department,
      faculty: mockUser.faculty,
    });
    setShowEditModal(false);
  };

  return (
    <div className="p-4 lg:p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          User Profile
        </h1>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg p-4 sm:p-6 mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-green-200 rounded-full flex items-center justify-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl">👤</span>
              </div>
            </div>
          </div>

          {/* User Information */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                About
              </h2>
              <button
                onClick={handleEditProfile}
                className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-200 text-sm sm:text-base"
              >
                Edit Profile
              </button>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 text-sm sm:text-base">
                  Name:
                </span>
                <span className="ml-0 sm:ml-2 text-gray-600 text-sm sm:text-base">
                  {mockUser.name}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 text-sm sm:text-base">
                  Registration Number:
                </span>
                <span className="ml-0 sm:ml-2 text-gray-600 text-sm sm:text-base">
                  {mockUser.registrationNumber}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 text-sm sm:text-base">
                  Department:
                </span>
                <span className="ml-0 sm:ml-2 text-gray-600 text-sm sm:text-base">
                  {mockUser.department}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 text-sm sm:text-base">
                  Faculty:
                </span>
                <span className="ml-0 sm:ml-2 text-gray-600 text-sm sm:text-base">
                  {mockUser.faculty}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 text-sm sm:text-base">
                  Email:
                </span>
                <span className="ml-0 sm:ml-2 text-gray-600 text-sm sm:text-base">
                  {mockUser.email}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 text-sm sm:text-base">
                  Phone:
                </span>
                <span className="ml-0 sm:ml-2 text-gray-600 text-sm sm:text-base">
                  {mockUser.phone}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start">
                <span className="font-semibold text-gray-700 text-sm sm:text-base">
                  Address:
                </span>
                <span className="ml-0 sm:ml-2 text-gray-600 text-sm sm:text-base">
                  {mockUser.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Statistics Section */}
      <div className="mb-6">
        <button className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-semibold mb-4">
          Total Quiz Taken
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {mockQuizResults.map((result, index) => (
            <QuizResultCard key={index} quizResult={result} />
          ))}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Edit Profile
              </h3>
              <button
                onClick={handleCancelEdit}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 text-gray-600"
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

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveProfile();
              }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Profile Image Section */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl">👤</span>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <button
                    type="button"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-200 text-sm sm:text-base"
                  >
                    Change Photo
                  </button>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    JPG, PNG up to 2MB
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Name */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Registration Number (Read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    value={mockUser.registrationNumber}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 text-sm sm:text-base"
                    disabled
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Cannot be changed
                  </p>
                </div>

                {/* Department */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="Computer science 200lvl">
                      Computer Science 200lvl
                    </option>
                    <option value="Mathematics 200lvl">
                      Mathematics 200lvl
                    </option>
                    <option value="Physics 200lvl">Physics 200lvl</option>
                    <option value="Chemistry 200lvl">Chemistry 200lvl</option>
                    <option value="Biology 200lvl">Biology 200lvl</option>
                  </select>
                </div>

                {/* Faculty */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Faculty
                  </label>
                  <select
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="Physical Science">Physical Science</option>
                    <option value="Life Science">Life Science</option>
                    <option value="Social Science">Social Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Education">Education</option>
                  </select>
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base resize-none"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
