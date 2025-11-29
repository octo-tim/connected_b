"use client";

import { useState } from "react";
import { Flame, Clock, Tag, ExternalLink, Store, Filter, ChevronDown, Check } from "lucide-react";

// Mock Data
const DEALS = [
    {
        id: 1,
        brand: "에르고베이비",
        name: "옴니 브리즈 아기띠 (쿨에어)",
        category: "outing",
        age: "0-36m",
        regularPrice: 320000,
        salePrice: 189000,
        discountRate: 41,
        isLowestPrice: true,
        channel: "online",
        channelName: "공식몰",
        validUntil: "2025-12-05",
        conditions: "첫구매 쿠폰 적용 시",
        isSponsored: false,
        imageColor: "#E0F7FA"
    },
    {
        id: 2,
        brand: "하기스",
        name: "네이처메이드 2단계 1박스",
        category: "hygiene",
        age: "3-6m",
        regularPrice: 89000,
        salePrice: 54900,
        discountRate: 38,
        isLowestPrice: false,
        channel: "linkmom",
        channelName: "링크맘 송파점",
        validUntil: "2025-12-03",
        conditions: "매장 방문 수령",
        isSponsored: true,
        imageColor: "#F3E5F5"
    },
    {
        id: 3,
        brand: "스토케",
        name: "트립트랩 하이체어 + 베이비세트",
        category: "feeding",
        age: "6m+",
        regularPrice: 550000,
        salePrice: 420000,
        discountRate: 24,
        isLowestPrice: true,
        channel: "online",
        channelName: "SSG닷컴",
        validUntil: "2025-12-10",
        conditions: "카드사 청구할인 포함",
        isSponsored: false,
        imageColor: "#FFF3E0"
    },
    {
        id: 4,
        brand: "알집매트",
        name: "ECO 실리온 더블제로매트",
        category: "play",
        age: "all",
        regularPrice: 420000,
        salePrice: 210000,
        discountRate: 50,
        isLowestPrice: true,
        channel: "online",
        channelName: "브랜드위크",
        validUntil: "2025-12-01",
        conditions: "선착순 100명",
        isSponsored: false,
        imageColor: "#E8F5E9"
    },
    {
        id: 5,
        brand: "압타밀",
        name: "프로푸트라 800g 6캔",
        category: "feeding",
        age: "0-6m",
        regularPrice: 240000,
        salePrice: 198000,
        discountRate: 18,
        isLowestPrice: false,
        channel: "online",
        channelName: "쿠팡",
        validUntil: "2025-12-07",
        conditions: "로켓배송",
        isSponsored: false,
        imageColor: "#E3F2FD"
    },
    {
        id: 6,
        brand: "블루래빗",
        name: "토이북 전집 풀세트",
        category: "play",
        age: "0-36m",
        regularPrice: 550000,
        salePrice: 299000,
        discountRate: 45,
        isLowestPrice: true,
        channel: "online",
        channelName: "CJ온스타일",
        validUntil: "2025-12-02",
        conditions: "방송 중 혜택",
        isSponsored: false,
        imageColor: "#FFF8E1"
    },
    {
        id: 7,
        brand: "몽디에스",
        name: "아토 로션 1+1",
        category: "hygiene",
        age: "all",
        regularPrice: 78000,
        salePrice: 39000,
        discountRate: 50,
        isLowestPrice: true,
        channel: "linkmom",
        channelName: "링크맘 전지점",
        validUntil: "2025-12-15",
        conditions: "멤버십 회원 대상",
        isSponsored: true,
        imageColor: "#FCE4EC"
    },
    {
        id: 8,
        brand: "노스페이스 키즈",
        name: "눕시 다운 자켓",
        category: "clothing",
        age: "12m+",
        regularPrice: 210000,
        salePrice: 147000,
        discountRate: 30,
        isLowestPrice: false,
        channel: "online",
        channelName: "무신사",
        validUntil: "2025-12-20",
        conditions: "시즌 오프",
        isSponsored: false,
        imageColor: "#ECEFF1"
    }
];

export default function DealsPage() {
    const [filterCat, setFilterCat] = useState("all");
    const [sortBy, setSortBy] = useState("recommend"); // recommend, discount, ending
    const [myBabyFilter, setMyBabyFilter] = useState(false);

    // Filter Logic
    const filteredDeals = DEALS.filter(deal => {
        if (filterCat !== "all" && deal.category !== filterCat) return false;
        if (myBabyFilter && deal.age !== "0-36m" && deal.age !== "all") return false; // Mock logic for "My Baby" (assuming 3m old)
        return true;
    }).sort((a, b) => {
        if (sortBy === "discount") return b.discountRate - a.discountRate;
        if (sortBy === "ending") return new Date(a.validUntil).getTime() - new Date(b.validUntil).getTime();
        return 0; // recommend (default order)
    });

    return (
        <div className="flex-col" style={{ minHeight: "100vh", paddingBottom: 100 }}>
            {/* Header */}
            <div className="p-4 sticky top-0 bg-white z-10" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="flex-center gap-2 mb-4">
                    <Flame color="var(--error)" fill="var(--error)" />
                    <h1 className="text-h1">핫딜 게시판</h1>
                </div>

                {/* Filter Bar */}
                <div className="flex-col gap-3">
                    <div className="flex-between">
                        <div className="flex gap-2 overflow-x-auto no-scrollbar" style={{ flex: 1 }}>
                            {["all", "feeding", "clothing", "hygiene", "outing", "play"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilterCat(cat)}
                                    className={`badge ${filterCat === cat ? "btn-primary" : "btn-outline"}`}
                                    style={{
                                        padding: "6px 12px",
                                        borderRadius: 20,
                                        fontSize: 13,
                                        whiteSpace: "nowrap",
                                        border: filterCat === cat ? "none" : "1px solid var(--border)"
                                    }}
                                >
                                    {cat === "all" && "전체"}
                                    {cat === "feeding" && "수유"}
                                    {cat === "clothing" && "의류"}
                                    {cat === "hygiene" && "위생"}
                                    {cat === "outing" && "외출"}
                                    {cat === "play" && "놀이"}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-between">
                        <button
                            onClick={() => setMyBabyFilter(!myBabyFilter)}
                            className="flex-center gap-2"
                            style={{ fontSize: 13, fontWeight: "bold", color: myBabyFilter ? "var(--primary)" : "var(--text-secondary)" }}
                        >
                            <div style={{
                                width: 18, height: 18,
                                borderRadius: 4,
                                border: myBabyFilter ? "none" : "2px solid var(--border)",
                                background: myBabyFilter ? "var(--primary)" : "transparent",
                                display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                {myBabyFilter && <Check size={12} color="white" />}
                            </div>
                            우리 아기 맞춤
                        </button>

                        <div className="flex gap-2 text-xs text-secondary">
                            <button onClick={() => setSortBy("recommend")} style={{ fontWeight: sortBy === "recommend" ? "bold" : "normal", color: sortBy === "recommend" ? "black" : "inherit" }}>추천순</button>
                            <span>|</span>
                            <button onClick={() => setSortBy("discount")} style={{ fontWeight: sortBy === "discount" ? "bold" : "normal", color: sortBy === "discount" ? "black" : "inherit" }}>할인율순</button>
                            <span>|</span>
                            <button onClick={() => setSortBy("ending")} style={{ fontWeight: sortBy === "ending" ? "bold" : "normal", color: sortBy === "ending" ? "black" : "inherit" }}>마감임박순</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Deal List */}
            <div className="p-4 flex-col gap-4 bg-gray-50" style={{ minHeight: "100%" }}>
                {filteredDeals.map((deal) => (
                    <div key={deal.id} className="card" style={{ padding: 0, overflow: "hidden", border: deal.isSponsored ? "2px solid var(--primary-light)" : "none" }}>
                        {deal.isSponsored && (
                            <div className="px-3 py-1 text-xs font-bold" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                                AD · 제휴 스폰서
                            </div>
                        )}

                        <div className="flex p-4 gap-4">
                            {/* Image Placeholder */}
                            <div style={{ width: 100, height: 100, background: deal.imageColor, borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#888" }}>
                                상품 이미지
                            </div>

                            <div className="flex-col flex-1 justify-between">
                                <div>
                                    <div className="flex-between mb-1">
                                        <span className="text-xs text-secondary">{deal.brand}</span>
                                        {deal.isLowestPrice && (
                                            <span className="badge" style={{ background: "#FFF3E0", color: "#F57C00", fontSize: 10, padding: "2px 4px", borderRadius: 4 }}>
                                                역대최저가
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-h3 mb-2" style={{ fontSize: 15, lineHeight: 1.3 }}>{deal.name}</h3>
                                </div>

                                <div>
                                    <div className="flex items-end gap-2 mb-1">
                                        <span className="text-h2" style={{ color: "var(--error)" }}>{deal.discountRate}%</span>
                                        <span className="text-h2">{deal.salePrice.toLocaleString()}원</span>
                                    </div>
                                    <div className="text-xs text-muted" style={{ textDecoration: "line-through" }}>
                                        {deal.regularPrice.toLocaleString()}원
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="px-4 py-3 flex-between" style={{ background: "#FAFAFA", borderTop: "1px solid #eee" }}>
                            <div className="flex-col gap-1">
                                <div className="flex items-center gap-1 text-xs text-secondary">
                                    {deal.channel === "linkmom" ? <Store size={12} /> : <ExternalLink size={12} />}
                                    <span>{deal.channelName}</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs" style={{ color: "var(--error)" }}>
                                    <Clock size={12} />
                                    <span>~{deal.validUntil} 마감</span>
                                </div>
                            </div>

                            <button className="btn btn-primary" style={{ padding: "8px 16px", fontSize: 13 }}>
                                {deal.channel === "linkmom" ? "매장 위치" : "구매 하기"}
                            </button>
                        </div>

                        {deal.conditions && (
                            <div className="px-4 py-2 text-xs text-secondary" style={{ borderTop: "1px solid #eee", background: "white" }}>
                                💡 조건: {deal.conditions}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
