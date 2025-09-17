"use client";

interface RecentActivityItemProps {
  activity: string;
  time: string;
  type: "quiz" | "course" | "summary" | "general";
}

export default function RecentActivityItem({
  activity,
  time,
  type,
}: RecentActivityItemProps) {
  const getIcon = () => {
    switch (type) {
      case "quiz":
        return "📝";
      case "course":
        return "📚";
      case "summary":
        return "📄";
      default:
        return "🔔";
    }
  };

  const getColor = () => {
    switch (type) {
      case "quiz":
        return "text-green-600";
      case "course":
        return "text-blue-600";
      case "summary":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <div className="flex-shrink-0">
        <span className="text-lg">{getIcon()}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-800">{activity}</p>
        <p className={`text-xs ${getColor()} mt-1`}>{time}</p>
      </div>
    </div>
  );
}

