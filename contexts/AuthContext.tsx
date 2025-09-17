"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  registrationNumber: string;
  department: string;
  faculty: string;
  phone: string;
  address: string;
  year: string;
  status: string;
  daysRemaining: number;
  profileImage: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (userData: any) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem("gs_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock successful login
    const mockUser: User = {
      id: "1",
      name: "Alade Chinemerem Ahmed",
      email: email,
      registrationNumber: "2025100GHE",
      department: "Computer science 200lvl",
      faculty: "Physical Science",
      phone: "+2349011882837",
      address: "Holy Family Youth Village, Amansae",
      year: "100 level",
      status: "Enrolled",
      daysRemaining: 102,
      profileImage: "/api/placeholder/150/150",
    };

    setUser(mockUser);
    localStorage.setItem("gs_user", JSON.stringify(mockUser));
    setIsLoading(false);
    return true;
  };

  const signup = async (userData: any): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock successful signup
    const mockUser: User = {
      id: "1",
      name: userData.fullName,
      email: userData.email,
      registrationNumber: "2025100GHE",
      department: "Computer science 200lvl",
      faculty: "Physical Science",
      phone: "+2349011882837",
      address: "Holy Family Youth Village, Amansae",
      year: "100 level",
      status: "Enrolled",
      daysRemaining: 102,
      profileImage: "/api/placeholder/150/150",
    };

    setUser(mockUser);
    localStorage.setItem("gs_user", JSON.stringify(mockUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("gs_user");
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

