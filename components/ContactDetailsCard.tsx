"use client";

import { User } from "@/types";

interface ContactDetailsCardProps {
  user: User;
}

export default function ContactDetailsCard({ user }: ContactDetailsCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Contact details</h2>

      <div className="space-y-3">
        <div className="bg-green-50 rounded-lg p-3">
          <span className="font-semibold text-gray-700">Phone number:</span>
          <br />
          <span className="text-gray-600">{user.phone}</span>
        </div>

        <div className="bg-green-50 rounded-lg p-3">
          <span className="font-semibold text-gray-700">Email Address:</span>
          <br />
          <span className="text-gray-600">{user.email}</span>
        </div>

        <div className="bg-green-50 rounded-lg p-3">
          <span className="font-semibold text-gray-700">House Address:</span>
          <br />
          <span className="text-gray-600">{user.address}</span>
        </div>
      </div>
    </div>
  );
}

