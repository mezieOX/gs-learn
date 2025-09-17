"use client";

import { Announcement } from "@/types";

interface AnnouncementCardProps {
  announcement: Announcement;
}

export default function AnnouncementCard({
  announcement,
}: AnnouncementCardProps) {
  return (
    <div className="bg-green-600 rounded-lg p-6 text-white">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4">
        {announcement.title}
      </h2>
      <p className="text-green-100 leading-relaxed">{announcement.content}</p>
    </div>
  );
}

