"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ChevronLeft, Check } from "lucide-react";

export default function OnboardingPage() {
    const { updateBaby, updatePreferences } = useAuth();
    const router = useRouter();
    const [step, setStep] = useState(1);

    // Step 1: Baby Info
    const [babyName, setBabyName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState<"boy" | "girl" | "unknown">("unknown");

    // Step 2: Preferences
    const [housing, setHousing] = useState("Apartment");
    const [budget, setBudget] = useState("Standard");

    const handleNext = () => {
        if (step === 1) {
            if (!babyName || !birthDate) return;
            updateBaby({ name: babyName, birthDate, gender });
            setStep(2);
        } else {
            updatePreferences({ housingType: housing, budget });
            router.push("/main");
        }
    };

    return (
        <div className="flex-col" style={{ minHeight: "100vh", padding: "24px" }}>
            {/* Header */}
            <div className="flex-between mb-4">
                {step > 1 ? (
                    <button onClick={() => setStep(step - 1)}>
                        <ChevronLeft size={24} />
                    </button>
                ) : (
                    <div />
                )}
                <div className="text-sm font-bold">단계 {step} / 2</div>
                <div style={{ width: 24 }} />
            </div>

            {/* Progress Bar */}
            <div style={{ height: 4, background: "var(--border)", borderRadius: 2, marginBottom: 32 }}>
                <div style={{
                    height: "100%",
                    width: step === 1 ? "50%" : "100%",
                    background: "var(--primary)",
                    borderRadius: 2,
                    transition: "width 0.3s ease"
                }} />
            </div>

            {step === 1 ? (
                <div className="flex-col gap-4">
                    <h2 className="text-h1">아이 정보를 알려주세요</h2>
                    <p className="text-body" style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
                        아이의 월령과 발달 단계에 맞춰 꼭 필요한 아이템을 추천해 드려요.
                    </p>

                    <div>
                        <label className="text-sm mb-4 block">아이 태명/이름</label>
                        <input
                            type="text"
                            value={babyName}
                            onChange={(e) => setBabyName(e.target.value)}
                            className="input-field"
                            placeholder="예: 튼튼이"
                        />
                    </div>

                    <div>
                        <label className="text-sm mb-4 block">출산 예정일 / 생년월일</label>
                        <input
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="input-field"
                        />
                    </div>

                    <div>
                        <label className="text-sm mb-4 block">성별</label>
                        <div className="flex-between gap-2">
                            {[
                                { id: "boy", label: "남자" },
                                { id: "girl", label: "여자" },
                                { id: "unknown", label: "아직 몰라요" }
                            ].map((g) => (
                                <button
                                    key={g.id}
                                    onClick={() => setGender(g.id as any)}
                                    className={`card flex-center ${gender === g.id ? "btn-primary" : ""}`}
                                    style={{ flex: 1, padding: "12px", border: gender === g.id ? "none" : "1px solid var(--border)" }}
                                >
                                    {g.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-col gap-4">
                    <h2 className="text-h1">환경 정보를 알려주세요</h2>
                    <p className="text-body" style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
                        주거 형태와 예산에 맞는 최적의 제품을 추천해 드립니다.
                    </p>

                    <div>
                        <label className="text-sm mb-4 block">주거 형태</label>
                        <div className="flex-col gap-2">
                            {[
                                { id: "Apartment", label: "아파트" },
                                { id: "House", label: "주택" },
                                { id: "Villa", label: "빌라/기타" }
                            ].map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setHousing(type.id)}
                                    className="card flex-between"
                                    style={{
                                        padding: "16px",
                                        border: housing === type.id ? "2px solid var(--primary)" : "1px solid var(--border)",
                                        background: housing === type.id ? "var(--primary-light)" : "var(--surface)"
                                    }}
                                >
                                    <span>{type.label}</span>
                                    {housing === type.id && <Check size={20} color="var(--primary)" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm mb-4 block">선호 예산대</label>
                        <div className="flex-col gap-2">
                            {[
                                { id: "Budget-Friendly", label: "가성비 중시" },
                                { id: "Standard", label: "표준/일반" },
                                { id: "Premium", label: "프리미엄 선호" }
                            ].map((b) => (
                                <button
                                    key={b.id}
                                    onClick={() => setBudget(b.id)}
                                    className="card flex-between"
                                    style={{
                                        padding: "16px",
                                        border: budget === b.id ? "2px solid var(--primary)" : "1px solid var(--border)",
                                        background: budget === b.id ? "var(--primary-light)" : "var(--surface)"
                                    }}
                                >
                                    <span>{b.label}</span>
                                    {budget === b.id && <Check size={20} color="var(--primary)" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div style={{ flex: 1 }} />

            <button
                onClick={handleNext}
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "24px" }}
            >
                {step === 1 ? "다음 단계" : "설정 완료"}
            </button>
        </div>
    );
}
