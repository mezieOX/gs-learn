export interface User {
  id: string;
  name: string;
  registrationNumber: string;
  department: string;
  faculty: string;
  email: string;
  phone: string;
  address: string;
  year: string;
  status: string;
  daysRemaining: number;
  profileImage: string;
}

export interface Course {
  id: string;
  title: string;
  enrolled: number;
  accuracy: number;
  completionRate: number;
  questions: number;
  lastEdited: string;
  image: string;
}

export interface QuizResult {
  course: string;
  totalQuizzes: number;
  excellent: number;
  veryGood: number;
  good: number;
  fair: number;
  failed: number;
}

export interface Summary {
  id: string;
  title: string;
  pages: number;
  lastEdited: string;
  image: string;
}

export interface QuestionBank {
  id: string;
  title: string;
  totalQuestions: number;
  semester: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  active?: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

