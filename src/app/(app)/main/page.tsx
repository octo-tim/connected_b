"use client";

import { useAuth } from "@/context/AuthContext";
import { ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const { user, baby } = useAuth();

    const getDaysOld = () => {
        if (!baby?.birthDate) return 0;
        const birth = new Date(baby.birthDate);
        const today = new Date();
        const diff = today.getTime() - birth.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    };

    const daysOld = getDaysOld();

    return (
        <div className="flex-col gap-4 p-4">
            {/* Header */}
            <div className="flex-between mb-4">
                <div>
                    <h1 className="text-h2">안녕하세요, {user?.name || "부모님"}</h1>
                    <p className="text-sm">
                        {baby?.name || "아이"}가 태어난 지 <span style={{ color: "var(--primary)", fontWeight: "bold" }}>{daysOld}일</span> 되었어요.
                    </p>
                </div>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--border)" }} />
            </div>

            {/* Curation Card */}
            <div className="card" style={{ background: "linear-gradient(135deg, var(--primary) 0%, #FFCCBC 100%)", color: "white", border: "none" }}>
                <div className="text-sm" style={{ opacity: 0.9, marginBottom: 4 }}>오늘의 추천</div>
                <h3 className="text-h3" style={{ marginBottom: 12 }}>터미타임 할 시간이에요!</h3>
                <p className="text-sm" style={{ opacity: 0.9, marginBottom: 16 }}>
                    생후 {daysOld}일, 아기에게 좋은 놀이 매트가 필요해요. 추천 아이템을 확인해보세요.
                </p>
                <Link href="/curation" className="btn" style={{ background: "white", color: "var(--primary)", padding: "8px 16px", fontSize: 14 }}>
                    가이드 보기
                </Link>
            </div>

            {/* Progress */}
            <div className="card">
                <div className="flex-between mb-4">
                    <h3 className="text-h3">필수 준비 리스트</h3>
                    <Link href="/curation" className="text-sm" style={{ color: "var(--primary)" }}>전체보기</Link>
                </div>
                <div className="flex-between mb-2">
                    <span className="text-sm">진행률</span>
                    <span className="text-sm font-bold">12 / 27</span>
                </div>
                <div style={{ height: 8, background: "var(--border)", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ width: "45%", height: "100%", background: "var(--secondary)" }} />
                </div>
            </div>

            {/* Recent Purchases */}
            <div>
                <div className="flex-between mb-4 mt-4">
                    <h3 className="text-h3">최근 구매 기록</h3>
                    <Link href="/record" className="text-sm" style={{ color: "var(--primary)" }}>전체보기</Link>
                </div>

                <div className="flex-col gap-2">
                    {[1, 2].map((i) => (
                        <div key={i} className="card flex-between">
                            <div className="flex-center gap-4">
                                <div style={{ padding: 10, background: "var(--secondary-light)", borderRadius: "var(--radius-sm)" }}>
                                    <ShoppingBag size={20} color="var(--secondary)" />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">오가닉 코튼 배냇저고리</div>
                                    <div className="text-xs">의류 • 2일 전</div>
                                </div>
                            </div>
                            <div className="font-bold text-sm">25,000원</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
