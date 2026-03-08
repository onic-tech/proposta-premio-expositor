"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check for stored user
    const storedUser = localStorage.getItem("onic_auth_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
       // Redirect to login if accessing admin routes and not logged in
       router.push("/admin/login"); 
    }
  }, [pathname]);

  const login = (email: string) => {
    // Mock login
    const newUser: User = {
      id: "1",
      name: email.includes("admin") ? "Admin User" : "User",
      email,
      role: email.includes("admin") ? "admin" : "user",
    };
    setUser(newUser);
    localStorage.setItem("onic_auth_user", JSON.stringify(newUser));
    router.push("/admin/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("onic_auth_user");
    router.push("/admin/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
