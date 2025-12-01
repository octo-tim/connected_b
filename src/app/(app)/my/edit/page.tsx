"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronLeft, Save } from "lucide-react";

export default function EditMyPage() {
    const { user, baby, preferences, updateUser, updateBaby, updatePreferences } = useAuth();
    const router = useRouter();

    const [name, setName] = useState("");
    const [babyName, setBabyName] = useState("");
    const [babyBirthDate, setBabyBirthDate] = useState("");
    const [babyGender, setBabyGender] = useState<"boy" | "girl" | "unknown">("unknown");
    const [housingType, setHousingType] = useState("");
    const [budget, setBudget] = useState("");

    useEffect(() => {
        if (user) setName(user.name);
        if (baby) {
            setBabyName(baby.name);
            setBabyBirthDate(baby.birthDate);
            setBabyGender(baby.gender);
        }
        if (preferences) {
            setHousingType(preferences.housingType);
            setBudget(preferences.budget);
        }
    }, [user, baby, preferences]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (user) {
            updateUser({ ...user, name });
        }

        updateBaby({
            name: babyName,
            birthDate: babyBirthDate,
            gender: babyGender
        });

        updatePreferences({
            housingType,
            budget
        });

        router.push("/my");
    };

    if (!user) return null;

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", paddingBottom: "100px" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "24px", gap: "12px" }}>
                <button
                    onClick={() => router.back()}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
                >
                    <ChevronLeft size={24} color="var(--text-primary)" />
                </button>
                <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>정보 수정</h1>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* User Info Section */}
                <section>
                    <h2 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: "var(--text-primary)" }}>내 정보</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", color: "var(--text-muted)" }}>이름</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid var(--border)",
                                    background: "var(--surface)",
                                    fontSize: "16px",
                                    color: "var(--text-primary)"
                                }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", color: "var(--text-muted)" }}>이메일</label>
                            <input
                                type="email"
                                value={user.email}
                                disabled
                                style={{
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid var(--border)",
                                    background: "var(--surface-hover)",
                                    fontSize: "16px",
                                    color: "var(--text-muted)"
                                }}
                            />
                        </div>
                    </div>
                </section>

                {/* Baby Info Section */}
                <section>
                    <h2 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: "var(--text-primary)" }}>아이 정보</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", color: "var(--text-muted)" }}>아이 이름 (태명)</label>
                            <input
                                type="text"
                                value={babyName}
                                onChange={(e) => setBabyName(e.target.value)}
                                style={{
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid var(--border)",
                                    background: "var(--surface)",
                                    fontSize: "16px",
                                    color: "var(--text-primary)"
                                }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", color: "var(--text-muted)" }}>생년월일 (예정일)</label>
                            <input
                                type="date"
                                value={babyBirthDate}
                                onChange={(e) => setBabyBirthDate(e.target.value)}
                                style={{
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid var(--border)",
                                    background: "var(--surface)",
                                    fontSize: "16px",
                                    color: "var(--text-primary)"
                                }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", color: "var(--text-muted)" }}>성별</label>
                            <div style={{ display: "flex", gap: "12px" }}>
                                {[
                                    { value: "boy", label: "남아" },
                                    { value: "girl", label: "여아" },
                                    { value: "unknown", label: "미확인" }
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setBabyGender(option.value as any)}
                                        style={{
                                            flex: 1,
                                            padding: "12px",
                                            borderRadius: "8px",
                                            border: `1px solid ${babyGender === option.value ? "var(--primary)" : "var(--border)"}`,
                                            background: babyGender === option.value ? "var(--primary-light)" : "var(--surface)",
                                            color: babyGender === option.value ? "var(--primary)" : "var(--text-muted)",
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            cursor: "pointer"
                                        }}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Preferences Section */}
                <section>
                    <h2 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: "var(--text-primary)" }}>주거 및 예산</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", color: "var(--text-muted)" }}>주거 형태</label>
                            <select
                                value={housingType}
                                onChange={(e) => setHousingType(e.target.value)}
                                style={{
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid var(--border)",
                                    background: "var(--surface)",
                                    fontSize: "16px",
                                    color: "var(--text-primary)"
                                }}
                            >
                                <option value="apartment">아파트</option>
                                <option value="villa">빌라</option>
                                <option value="house">주택</option>
                                <option value="officetel">오피스텔</option>
                            </select>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", color: "var(--text-muted)" }}>예산 범위</label>
                            <select
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                style={{
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid var(--border)",
                                    background: "var(--surface)",
                                    fontSize: "16px",
                                    color: "var(--text-primary)"
                                }}
                            >
                                <option value="low">실속형</option>
                                <option value="medium">표준형</option>
                                <option value="high">고급형</option>
                                <option value="premium">프리미엄</option>
                            </select>
                        </div>
                    </div>
                </section>

                <button
                    type="submit"
                    style={{
                        marginTop: "24px",
                        width: "100%",
                        padding: "16px",
                        borderRadius: "12px",
                        background: "var(--primary)",
                        color: "white",
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
                    <Save size={20} />
                    저장하기
                </button>
            </form>
        </div>
    );
}
