"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
    name: string;
    email: string;
}

interface Baby {
    name: string;
    birthDate: string;
    gender: "boy" | "girl" | "unknown";
}

interface Preferences {
    housingType: string;
    budget: string;
}

interface AuthContextType {
    user: User | null;
    baby: Baby | null;
    preferences: Preferences | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    updateBaby: (baby: Baby) => void;
    updatePreferences: (prefs: Preferences) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [baby, setBaby] = useState<Baby | null>(null);
    const [preferences, setPreferences] = useState<Preferences | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Load from local storage on mount
        const storedUser = localStorage.getItem("conectedB_user");
        const storedBaby = localStorage.getItem("conectedB_baby");
        const storedPrefs = localStorage.getItem("conectedB_prefs");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
        if (storedBaby) setBaby(JSON.parse(storedBaby));
        if (storedPrefs) setPreferences(JSON.parse(storedPrefs));
    }, []);

    const login = (userData: User) => {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("conectedB_user", JSON.stringify(userData));
    };

    const updateBaby = (babyData: Baby) => {
        setBaby(babyData);
        localStorage.setItem("conectedB_baby", JSON.stringify(babyData));
    };

    const updatePreferences = (prefsData: Preferences) => {
        setPreferences(prefsData);
        localStorage.setItem("conectedB_prefs", JSON.stringify(prefsData));
    };

    const logout = () => {
        setUser(null);
        setBaby(null);
        setPreferences(null);
        setIsAuthenticated(false);
        localStorage.removeItem("conectedB_user");
        localStorage.removeItem("conectedB_baby");
        localStorage.removeItem("conectedB_prefs");
        router.push("/");
    };

    return (
        <AuthContext.Provider value={{ user, baby, preferences, isAuthenticated, login, updateBaby, updatePreferences, logout }}>
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
