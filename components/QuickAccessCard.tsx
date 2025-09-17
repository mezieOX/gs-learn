"use client";

interface QuickAccessCardProps {
  title: string;
  icon: string;
  count: string;
  description: string;
  onClick: () => void;
}

export default function QuickAccessCard({
  title,
  icon,
  count,
  description,
  onClick,
}: QuickAccessCardProps) {
  return (
    <div
      className="bg-green-600 rounded-lg p-4 sm:p-6 text-white cursor-pointer hover:bg-green-700 transition-colors duration-200 shadow-lg"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-xl sm:text-2xl">{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold mb-1 truncate">
            {title}
          </h3>
          <p className="text-green-100 text-xs sm:text-sm">{count}</p>
        </div>
      </div>
      <p className="text-green-100 text-xs sm:text-sm mt-3 opacity-90 line-clamp-2">
        {description}
      </p>
    </div>
  );
}
