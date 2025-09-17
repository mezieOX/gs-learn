"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import SplashScreen from "./SplashScreen";
import OnboardingScreen from "./OnboardingScreen";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import EmailSentScreen from "./EmailSentScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";
import SuccessScreen from "./SuccessScreen";
import WelcomeScreen from "./WelcomeScreen";
import OTPVerificationScreen from "./OTPVerificationScreen";
import ModalWrapper from "./ModalWrapper";

interface AuthFlowProps {
  onAuthenticated: () => void;
}

type AuthStep =
  | "splash"
  | "onboarding"
  | "welcome"
  | "signup"
  | "signin"
  | "forgot-password"
  | "email-sent"
  | "otp-verification"
  | "reset-password"
  | "success";

export default function AuthFlow({ onAuthenticated }: AuthFlowProps) {
  const [currentStep, setCurrentStep] = useState<AuthStep>("splash");
  const [userEmail, setUserEmail] = useState("");
  const { login } = useAuth();

  const handleSignUpSubmit = (data: any) => {
    console.log("Sign up data:", data);
    // Simulate API call
    setTimeout(() => {
      setCurrentStep("success");
    }, 1000);
  };

  const handleSignInSubmit = async (data: any) => {
    console.log("Sign in data:", data);
    try {
      const success = await login(data.email, data.password);
      if (success) {
        onAuthenticated();
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in");
    // Simulate API call
    setTimeout(() => {
      onAuthenticated();
    }, 1000);
  };

  const handleGoogleSignUp = () => {
    console.log("Google sign up");
    // Simulate API call
    setTimeout(() => {
      setCurrentStep("success");
    }, 1000);
  };

  const handleForgotPasswordSubmit = (email: string) => {
    console.log("Forgot password for:", email);
    setUserEmail(email);
    setCurrentStep("otp-verification");
  };

  const handleOTPVerification = (otp: string) => {
    console.log("OTP verification:", otp);
    // Simulate API call
    setTimeout(() => {
      setCurrentStep("reset-password");
    }, 1000);
  };

  const handleResendOTP = () => {
    console.log("Resending OTP to:", userEmail);
    // Simulate API call
  };

  const handleResetPasswordSubmit = (data: any) => {
    console.log("Reset password data:", data);
    // Simulate API call
    setTimeout(() => {
      setCurrentStep("success");
    }, 1000);
  };

  const handleSuccessContinue = () => {
    onAuthenticated();
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "splash":
        return <SplashScreen onComplete={() => setCurrentStep("onboarding")} />;

      case "onboarding":
        return (
          <OnboardingScreen
            onGetStarted={() => setCurrentStep("signup")}
            onAlreadyHaveAccount={() => onAuthenticated()}
          />
        );

      case "welcome":
        return (
          <WelcomeScreen
            onGetStarted={() => setCurrentStep("signup")}
            onAlreadyHaveAccount={() => setCurrentStep("signin")}
          />
        );

      case "signup":
        return (
          <div className="relative">
            <OnboardingScreen
              onGetStarted={() => setCurrentStep("signup")}
              onAlreadyHaveAccount={() => onAuthenticated()}
            />
            <ModalWrapper onClose={() => setCurrentStep("onboarding")}>
              <SignUpScreen
                onSignUp={handleSignUpSubmit}
                onSignIn={() => setCurrentStep("signin")}
                onGoogleSignUp={handleGoogleSignUp}
              />
            </ModalWrapper>
          </div>
        );

      case "signin":
        return (
          <div className="relative">
            <OnboardingScreen
              onGetStarted={() => setCurrentStep("signup")}
              onAlreadyHaveAccount={() => onAuthenticated()}
            />
            <ModalWrapper onClose={() => setCurrentStep("onboarding")}>
              <SignInScreen
                onSignIn={handleSignInSubmit}
                onSignUp={() => setCurrentStep("signup")}
                onForgotPassword={() => setCurrentStep("forgot-password")}
                onGoogleSignIn={handleGoogleSignIn}
              />
            </ModalWrapper>
          </div>
        );

      case "forgot-password":
        return (
          <div className="relative">
            <OnboardingScreen
              onGetStarted={() => setCurrentStep("signup")}
              onAlreadyHaveAccount={() => onAuthenticated()}
            />
            <ModalWrapper onClose={() => setCurrentStep("onboarding")}>
              <ForgotPasswordScreen
                onForgotPassword={handleForgotPasswordSubmit}
                onBackToSignIn={() => setCurrentStep("signin")}
              />
            </ModalWrapper>
          </div>
        );

      case "email-sent":
        return (
          <div className="relative">
            <OnboardingScreen
              onGetStarted={() => setCurrentStep("signup")}
              onAlreadyHaveAccount={() => onAuthenticated()}
            />
            <ModalWrapper onClose={() => setCurrentStep("onboarding")}>
              <EmailSentScreen
                email={userEmail}
                onOpenEmailApp={() => console.log("Opening email app")}
                onBackToSignIn={() => setCurrentStep("signin")}
              />
            </ModalWrapper>
          </div>
        );

      case "otp-verification":
        return (
          <div className="relative">
            <OnboardingScreen
              onGetStarted={() => setCurrentStep("signup")}
              onAlreadyHaveAccount={() => onAuthenticated()}
            />
            <ModalWrapper onClose={() => setCurrentStep("onboarding")}>
              <OTPVerificationScreen
                email={userEmail}
                onVerifyOTP={handleOTPVerification}
                onResendOTP={handleResendOTP}
                onBack={() => setCurrentStep("forgot-password")}
              />
            </ModalWrapper>
          </div>
        );

      case "reset-password":
        return (
          <div className="relative">
            <OnboardingScreen
              onGetStarted={() => setCurrentStep("signup")}
              onAlreadyHaveAccount={() => onAuthenticated()}
            />
            <ModalWrapper onClose={() => setCurrentStep("onboarding")}>
              <ResetPasswordScreen
                onResetPassword={handleResetPasswordSubmit}
                onBack={() => setCurrentStep("otp-verification")}
              />
            </ModalWrapper>
          </div>
        );

      case "success":
        return (
          <ModalWrapper showCloseButton={false}>
            <SuccessScreen
              title="Welcome Back!"
              message="You have successfully reset and created a new password."
              buttonText="Go to Home"
              onContinue={handleSuccessContinue}
              showLoading={true}
            />
          </ModalWrapper>
        );

      default:
        return <SplashScreen onComplete={() => setCurrentStep("onboarding")} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Background with abstract shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large green shape on left */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-200 rounded-full opacity-30 blur-3xl"></div>
        {/* Purple shape center-left */}
        <div className="absolute top-1/4 -left-10 w-64 h-64 bg-purple-200 rounded-full opacity-25 blur-2xl"></div>
        {/* Blue shape on right */}
        <div className="absolute top-1/3 right-10 w-48 h-48 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
        {/* Orange shape bottom-left */}
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        {/* "s Made" text on right */}
        <div className="absolute top-1/4 right-1/4 text-6xl font-bold text-gray-300 opacity-10 blur-sm transform rotate-12">
          s Made
        </div>
        {/* Additional UI elements on right */}
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-500 rounded-lg opacity-20 blur-sm transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-15 blur-sm"></div>
      </div>
      <div className="relative z-10">{renderCurrentStep()}</div>
    </div>
  );
}
