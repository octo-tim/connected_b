"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { LogOut, User, Baby, Home, Wallet, Edit } from "lucide-react";

export default function MyPage() {
    const { user, baby, preferences, logout } = useAuth();
    const router = useRouter();

    if (!user) return null;

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>내 정보</h1>

            {/* User Profile Card */}
            <div style={{
                background: "var(--surface)",
                borderRadius: "16px",
                padding: "20px",
                marginBottom: "16px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "16px"
            }}>
                <div style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "var(--primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)"
                }}>
                    <User size={32} />
                </div>
                <div>
                    <h2 style={{ fontSize: "18px", fontWeight: "600" }}>{user.name}</h2>
                    <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>{user.email}</p>
                </div>
                <button
                    onClick={() => router.push("/my/edit")}
                    style={{
                        marginLeft: "auto",
                        background: "none",
                        border: "none",
                        color: "var(--text-muted)",
                        cursor: "pointer",
                        padding: "8px"
                    }}
                >
                    <Edit size={20} />
                </button>
            </div>

            {/* Baby Info */}
            {baby && (
                <div style={{
                    background: "var(--surface)",
                    borderRadius: "16px",
                    padding: "20px",
                    marginBottom: "16px",
                    border: "1px solid var(--border)"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                        <Baby size={20} color="var(--primary)" />
                        <h3 style={{ fontSize: "16px", fontWeight: "600" }}>아이 정보</h3>
                    </div>
                    <div style={{ display: "grid", gap: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "var(--text-muted)" }}>이름</span>
                            <span style={{ fontWeight: "500" }}>{baby.name}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "var(--text-muted)" }}>생년월일</span>
                            <span style={{ fontWeight: "500" }}>{baby.birthDate}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "var(--text-muted)" }}>성별</span>
                            <span style={{ fontWeight: "500" }}>{baby.gender === "boy" ? "남아" : baby.gender === "girl" ? "여아" : "미확인"}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Preferences */}
            {preferences && (
                <div style={{
                    background: "var(--surface)",
                    borderRadius: "16px",
                    padding: "20px",
                    marginBottom: "24px",
                    border: "1px solid var(--border)"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                        <Home size={20} color="var(--primary)" />
                        <h3 style={{ fontSize: "16px", fontWeight: "600" }}>주거 및 예산</h3>
                    </div>
                    <div style={{ display: "grid", gap: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "var(--text-muted)" }}>주거 형태</span>
                            <span style={{ fontWeight: "500" }}>{preferences.housingType}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "var(--text-muted)" }}>예산</span>
                            <span style={{ fontWeight: "500" }}>{preferences.budget}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Logout Button */}
            <button
                onClick={logout}
                style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "12px",
                    background: "var(--surface-hover)",
                    color: "var(--error)",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    cursor: "pointer"
                }}
            >
                <LogOut size={20} />
                로그아웃
            </button>
        </div>
    );
}
