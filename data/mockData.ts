import {
  User,
  Course,
  QuizResult,
  Summary,
  QuestionBank,
  Announcement,
} from "@/types";

export const mockUser: User = {
  id: "1",
  name: "Alade Chinemerem Ahmed",
  registrationNumber: "2025100GHE",
  department: "Computer science 200lvl",
  faculty: "Physical Science",
  email: "aladeahmed@123mail.com",
  phone: "+2349011882837",
  address: "Holy Family Youth Village, Amansae",
  year: "100 level",
  status: "Enrolled",
  daysRemaining: 102,
  profileImage: "/api/placeholder/150/150",
};

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Mastering GS 100 for Impactful Results",
    enrolled: 10,
    accuracy: 40,
    completionRate: 40,
    questions: 10,
    lastEdited: "2h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "2",
    title: "Advanced GS 101 Techniques",
    enrolled: 15,
    accuracy: 75,
    completionRate: 60,
    questions: 15,
    lastEdited: "1h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "3",
    title: "GS 102 Fundamentals",
    enrolled: 8,
    accuracy: 85,
    completionRate: 90,
    questions: 12,
    lastEdited: "3h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "4",
    title: "Comprehensive GS 103 Guide",
    enrolled: 20,
    accuracy: 65,
    completionRate: 45,
    questions: 18,
    lastEdited: "4h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "5",
    title: "GS 104 Advanced Concepts",
    enrolled: 12,
    accuracy: 70,
    completionRate: 55,
    questions: 14,
    lastEdited: "5h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "6",
    title: "GS 105 Mastery Course",
    enrolled: 25,
    accuracy: 80,
    completionRate: 70,
    questions: 20,
    lastEdited: "6h ago",
    image: "/api/placeholder/300/150",
  },
];

export const mockQuizResults: QuizResult[] = [
  {
    course: "Gs 101",
    totalQuizzes: 15,
    excellent: 7,
    veryGood: 2,
    good: 2,
    fair: 2,
    failed: 2,
  },
  {
    course: "Gs 102",
    totalQuizzes: 12,
    excellent: 5,
    veryGood: 3,
    good: 2,
    fair: 1,
    failed: 1,
  },
  {
    course: "Gs 103",
    totalQuizzes: 18,
    excellent: 8,
    veryGood: 4,
    good: 3,
    fair: 2,
    failed: 1,
  },
  {
    course: "Gs 104",
    totalQuizzes: 14,
    excellent: 6,
    veryGood: 3,
    good: 2,
    fair: 2,
    failed: 1,
  },
  {
    course: "Gs 105",
    totalQuizzes: 20,
    excellent: 10,
    veryGood: 5,
    good: 3,
    fair: 1,
    failed: 1,
  },
];

export const mockSummaries: Summary[] = [
  {
    id: "1",
    title: "Simply Summarized GS 100 chapter 3",
    pages: 7,
    lastEdited: "2h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "2",
    title: "GS 101 Complete Study Guide",
    pages: 12,
    lastEdited: "3h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "3",
    title: "GS 102 Key Concepts Summary",
    pages: 9,
    lastEdited: "4h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "4",
    title: "GS 103 Chapter 1-5 Overview",
    pages: 15,
    lastEdited: "5h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "5",
    title: "GS 104 Final Review Notes",
    pages: 11,
    lastEdited: "6h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "6",
    title: "GS 105 Comprehensive Summary",
    pages: 18,
    lastEdited: "7h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "7",
    title: "GS 106 Study Materials",
    pages: 13,
    lastEdited: "8h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "8",
    title: "GS 107 Quick Reference",
    pages: 8,
    lastEdited: "9h ago",
    image: "/api/placeholder/300/150",
  },
  {
    id: "9",
    title: "GS 108 Exam Preparation",
    pages: 16,
    lastEdited: "10h ago",
    image: "/api/placeholder/300/150",
  },
];

export const mockQuestionBanks: QuestionBank[] = [
  {
    id: "1",
    title: "First Semester",
    totalQuestions: 1079,
    semester: "First",
  },
  {
    id: "2",
    title: "Second Semester",
    totalQuestions: 1200,
    semester: "Second",
  },
];

export const mockAnnouncement: Announcement = {
  id: "1",
  title: "Announcement",
  content:
    "General Studies (GS) courses in Nigeria are designed to provide students with a broad foundation of knowledge across various disciplines. These courses aim to develop critical thinking, communication skills, and a well-rounded education. The GS curriculum typically covers areas such as communication skills, entrepreneurship, philosophy, science and technology, and Nigerian history.",
  date: "2024-01-15",
};

export const navigationItems = [
  { id: "homepage", label: "Dashboard", icon: "🏠", path: "/", active: false },
  {
    id: "courses",
    label: "Courses",
    icon: "📚",
    path: "/courses",
    active: false,
  },
  {
    id: "question-banks",
    label: "Question Banks",
    icon: "📝",
    path: "/question-banks",
    active: false,
  },
  {
    id: "summary",
    label: "Summary",
    icon: "📊",
    path: "/summary",
    active: false,
  },
  {
    id: "profile",
    label: "Profile",
    icon: "👤",
    path: "/profile",
    active: false,
  },
  {
    id: "billing",
    label: "Billing",
    icon: "💳",
    path: "/billing",
    active: false,
  },
  {
    id: "settings",
    label: "Settings",
    icon: "⚙️",
    path: "/settings",
    active: false,
  },
  { id: "logout", label: "Logout", icon: "🚪", path: "/logout", active: false },
];

export const mockRecentActivities = [
  {
    id: "1",
    activity: "You completed a quiz in GS 100",
    time: "2 hours ago",
    type: "quiz" as const,
  },
  {
    id: "2",
    activity: "Started new course: GS 101 Fundamentals",
    time: "1 day ago",
    type: "course" as const,
  },
  {
    id: "3",
    activity: "Downloaded summary: GS 102 Chapter 3",
    time: "2 days ago",
    type: "summary" as const,
  },
  {
    id: "4",
    activity: "Achievement unlocked: Quiz Master",
    time: "3 days ago",
    type: "general" as const,
  },
  {
    id: "5",
    activity: "Completed practice test in GS 103",
    time: "4 days ago",
    type: "quiz" as const,
  },
];
