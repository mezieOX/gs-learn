"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import AuthFlow from "@/components/auth/AuthFlow";
import HomePage from "@/components/pages/HomePage";
import CoursesPage from "@/components/pages/CoursesPage";
import QuestionBanksPage from "@/components/pages/QuestionBanksPage";
import SummaryPage from "@/components/pages/SummaryPage";
import ProfilePage from "@/components/pages/ProfilePage";
import QuizScreen from "@/components/pages/QuizScreen";
import SessionSummary from "@/components/pages/SessionSummary";
import BillingPage from "@/components/pages/BillingPage";
import QuestionBankDetail from "@/components/pages/QuestionBankDetail";
import SettingsPage from "@/components/pages/SettingsPage";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("homepage");
  const { isAuthenticated, isLoading, logout } = useAuth();

  const renderPage = () => {
    switch (currentPage) {
      case "homepage":
      case "/":
        return <HomePage onNavigate={handleNavigation} />;
      case "dashboard":
        return <HomePage onNavigate={handleNavigation} />;
      case "courses":
      case "/courses":
        return <CoursesPage />;
      case "question-banks":
      case "/question-banks":
        return <QuestionBanksPage onNavigate={handleNavigation} />;
      case "question-bank-detail":
        return (
          <QuestionBankDetail
            onBack={() => setCurrentPage("question-banks")}
            onStartQuiz={() => setCurrentPage("quiz")}
          />
        );
      case "quiz":
        return (
          <QuizScreen
            onFinishSession={() => setCurrentPage("session-summary")}
            onPreviousQuestion={() => {}}
            onNextQuestion={() => {}}
            onExitQuiz={() => setCurrentPage("question-bank-detail")}
          />
        );
      case "session-summary":
        return (
          <SessionSummary
            onEndSession={() => setCurrentPage("homepage")}
            onStartNewSession={() => setCurrentPage("question-bank-detail")}
          />
        );
      case "billing":
      case "/billing":
        return <BillingPage onBack={() => setCurrentPage("homepage")} />;
      case "settings":
      case "/settings":
        return <SettingsPage onNavigate={handleNavigation} />;
      case "summary":
      case "/summary":
        return <SummaryPage />;
      case "profile":
      case "/profile":
        return <ProfilePage onNavigate={handleNavigation} />;
      case "logout":
        // Handle logout - this will be triggered by the logout confirmation
        return <HomePage />;
      default:
        return <HomePage />;
    }
  };

  const handleNavigation = (path: string) => {
    setCurrentPage(path);
  };

  const handleAuthenticated = () => {
    setCurrentPage("homepage");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthFlow onAuthenticated={handleAuthenticated} />;
  }

  // Pages that should not use the Layout (full-screen pages)
  const fullScreenPages = ["quiz", "session-summary"];

  if (fullScreenPages.includes(currentPage)) {
    return renderPage();
  }

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigation}>
      {renderPage()}
    </Layout>
  );
}
