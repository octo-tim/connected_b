"use client";

import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default function RecordPage() {
    return (
        <div className="p-4 flex-col gap-4" style={{ minHeight: "100vh" }}>
            <div className="flex-between">
                <h1 className="text-h1">구매 기록</h1>
                <Link href="/record/new" className="btn btn-primary" style={{ padding: "8px 12px" }}>
                    <Plus size={20} />
                </Link>
            </div>

            <div className="card flex-center gap-2" style={{ padding: "12px" }}>
                <Search size={20} color="var(--text-muted)" />
                <input
                    type="text"
                    placeholder="구매 내역 검색..."
                    style={{ border: "none", outline: "none", width: "100%", fontSize: 14 }}
                />
            </div>

            <div className="flex-col gap-4 mt-4">
                {[
                    { id: 1, name: "하기스 네이처메이드 2단계", date: "2023.11.28", cat: "위생", price: 54900, channel: "링크맘" },
                    { id: 2, name: "브라운 체온계 IRT-6520", date: "2023.11.25", cat: "건강", price: 89000, channel: "온라인" },
                    { id: 3, name: "튤립 사운드북 5권 세트", date: "2023.11.20", cat: "놀이", price: 65000, channel: "선물" },
                    { id: 4, name: "스토케 트립트랩", date: "2023.11.15", cat: "가구", price: 390000, channel: "온라인" },
                    { id: 5, name: "밤부베베 손수건 10장", date: "2023.11.10", cat: "의류", price: 25000, channel: "링크맘" },
                    { id: 6, name: "압타밀 프로푸트라 800g", date: "2023.11.05", cat: "수유", price: 35000, channel: "온라인" },
                ].map((item) => (
                    <div key={item.id} className="card">
                        <div className="flex-between mb-2">
                            <span className="font-bold text-sm">{item.name}</span>
                            <span className="text-xs text-secondary">{item.date}</span>
                        </div>
                        <div className="flex-between">
                            <div className="flex gap-2">
                                <span className="text-xs badge" style={{ background: "var(--secondary-light)", color: "var(--secondary)", padding: "4px 8px", borderRadius: 4 }}>
                                    {item.cat}
                                </span>
                                <span className="text-xs badge" style={{ background: "#F5F5F5", color: "#616161", padding: "4px 8px", borderRadius: 4 }}>
                                    {item.channel}
                                </span>
                            </div>
                            <span className="font-bold text-sm">{item.price.toLocaleString()}원</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
