"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Plus, Search, Heart, MessageCircle } from "lucide-react";

// Mock Data
const ITEMS = [
    {
        id: 1,
        title: "스토케 트립트랩 하이체어 (베이비세트 포함)",
        location: "송파구 잠실동",
        time: "10분 전",
        price: 350000,
        imageColor: "#FFF3E0",
        likes: 5,
        chats: 2,
        status: "sale" // sale, reserved, sold
    },
    {
        id: 2,
        title: "타이니러브 모빌 거치대 포함",
        location: "송파구 방이동",
        time: "1시간 전",
        price: 25000,
        imageColor: "#E0F7FA",
        likes: 12,
        chats: 5,
        status: "reserved"
    },
    {
        id: 3,
        title: "국민 문짝 (러닝홈) 구버전",
        location: "송파구 삼전동",
        time: "3시간 전",
        price: 0,
        imageColor: "#F3E5F5",
        likes: 8,
        chats: 3,
        status: "sale"
    },
    {
        id: 4,
        title: "에르고 아기띠 쿨에어",
        location: "강남구 역삼동",
        time: "5시간 전",
        price: 50000,
        imageColor: "#E8F5E9",
        likes: 3,
        chats: 0,
        status: "sold"
    },
    {
        id: 5,
        title: "베이비룸 8p + 안전문",
        location: "송파구 가락동",
        time: "6시간 전",
        price: 40000,
        imageColor: "#FFF8E1",
        likes: 15,
        chats: 7,
        status: "sale"
    },
    {
        id: 6,
        title: "유팡 젖병소독기 LED",
        location: "송파구 문정동",
        time: "1일 전",
        price: 120000,
        imageColor: "#FCE4EC",
        likes: 20,
        chats: 10,
        status: "reserved"
    },
    {
        id: 7,
        title: "튤립 사운드북 5권 일괄",
        location: "강동구 성내동",
        time: "1일 전",
        price: 15000,
        imageColor: "#E1F5FE",
        likes: 6,
        chats: 4,
        status: "sale"
    },
    {
        id: 8,
        title: "부가부 비6 절충형 유모차",
        location: "송파구 잠실본동",
        time: "2일 전",
        price: 650000,
        imageColor: "#ECEFF1",
        likes: 45,
        chats: 12,
        status: "sale"
    }
];

export default function MarketPage() {
    const [location, setLocation] = useState("송파구 잠실동");

    return (
        <div className="flex-col" style={{ minHeight: "100vh", paddingBottom: 100 }}>
            {/* Header */}
            <div className="p-4 sticky top-0 bg-white z-10 flex-between" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="flex-center gap-1 cursor-pointer">
                    <span className="text-h3">{location}</span>
                    <MapPin size={16} />
                </div>
                <div className="flex gap-4">
                    <Search size={24} />
                    <div style={{ position: "relative" }}>
                        <MessageCircle size={24} />
                        <div style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, background: "var(--error)", borderRadius: "50%" }} />
                    </div>
                </div>
            </div>

            {/* Item List */}
            <div className="flex-col">
                {ITEMS.map((item) => (
                    <Link href={`/market/${item.id}`} key={item.id} className="flex p-4 gap-4" style={{ borderBottom: "1px solid var(--border)" }}>
                        <div style={{ width: 100, height: 100, background: item.imageColor, borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontSize: 10, position: "relative" }}>
                            상품 이미지
                            {item.status !== "sale" && (
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>
                                    {item.status === "reserved" ? "예약중" : "거래완료"}
                                </div>
                            )}
                        </div>

                        <div className="flex-col flex-1 justify-between py-1">
                            <div>
                                <h3 className="text-body font-normal mb-1" style={{ fontSize: 16 }}>{item.title}</h3>
                                <div className="text-xs text-secondary mb-1">
                                    {item.location} · {item.time}
                                </div>
                                <div className="flex items-center gap-1">
                                    {item.status !== "sale" && (
                                        <span className="badge" style={{ background: "#424242", color: "white", padding: "2px 6px", borderRadius: 4, fontSize: 10, marginRight: 4 }}>
                                            {item.status === "reserved" ? "예약중" : "거래완료"}
                                        </span>
                                    )}
                                    <span className="text-h3">{item.price === 0 ? "무료나눔" : `${item.price.toLocaleString()}원`}</span>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 text-secondary text-sm">
                                <div className="flex-center gap-1">
                                    <MessageCircle size={14} /> {item.chats}
                                </div>
                                <div className="flex-center gap-1">
                                    <Heart size={14} /> {item.likes}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* FAB */}
            <Link
                href="/market/new"
                className="flex-center shadow-lg"
                style={{
                    position: "fixed",
                    bottom: 100,
                    right: 20,
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    color: "white",
                    zIndex: 20
                }}
            >
                <Plus size={28} />
            </Link>
        </div>
    );
}
