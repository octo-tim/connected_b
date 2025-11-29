"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Camera, Star, Calendar } from "lucide-react";

export default function NewRecordPage() {
    const router = useRouter();

    // Basic Fields
    const [productName, setProductName] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");

    // Purchase Info
    const [purchaseDate, setPurchaseDate] = useState(new Date().toISOString().split('T')[0]);
    const [channel, setChannel] = useState("online");
    const [priceRegular, setPriceRegular] = useState("");
    const [priceDiscount, setPriceDiscount] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [purchaseType, setPurchaseType] = useState("direct"); // direct, gift, secondhand

    // Additional Fields
    const [giftGiver, setGiftGiver] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [repurchase, setRepurchase] = useState(false);
    const [usageStart, setUsageStart] = useState("");
    const [usageEnd, setUsageEnd] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, save data here
        alert("구매 기록이 저장되었습니다.");
        router.back();
    };

    return (
        <div className="flex-col" style={{ minHeight: "100vh", padding: "24px", paddingBottom: "100px" }}>
            {/* Header */}
            <div className="flex-between mb-4">
                <button onClick={() => router.back()}>
                    <ChevronLeft size={24} />
                </button>
                <h1 className="text-h2">구매 기록 추가</h1>
                <div style={{ width: 24 }} />
            </div>

            <form onSubmit={handleSubmit} className="flex-col gap-6">
                {/* 1. 기본 정보 */}
                <section>
                    <h3 className="text-h3 mb-4" style={{ color: "var(--primary)" }}>기본 정보</h3>
                    <div className="flex-col gap-4">
                        <div>
                            <label className="text-sm mb-2 block">상품명</label>
                            <input
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="input-field"
                                placeholder="예: 국민 아기띠"
                                required
                            />
                        </div>
                        <div className="flex gap-4">
                            <div style={{ flex: 1 }}>
                                <label className="text-sm mb-2 block">브랜드</label>
                                <input
                                    type="text"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="input-field"
                                    placeholder="브랜드명"
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label className="text-sm mb-2 block">카테고리</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="input-field"
                                    style={{ background: "var(--surface)" }}
                                >
                                    <option value="">선택</option>
                                    <option value="feeding">수유</option>
                                    <option value="clothing">의류</option>
                                    <option value="hygiene">위생/목욕</option>
                                    <option value="sleep">수면</option>
                                    <option value="outing">외출</option>
                                    <option value="play">놀이</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. 구매 정보 */}
                <section>
                    <h3 className="text-h3 mb-4" style={{ color: "var(--primary)" }}>구매 정보</h3>
                    <div className="flex-col gap-4">
                        <div>
                            <label className="text-sm mb-2 block">구매일</label>
                            <input
                                type="date"
                                value={purchaseDate}
                                onChange={(e) => setPurchaseDate(e.target.value)}
                                className="input-field"
                            />
                        </div>

                        <div>
                            <label className="text-sm mb-2 block">구매 경로</label>
                            <select
                                value={channel}
                                onChange={(e) => setChannel(e.target.value)}
                                className="input-field"
                                style={{ background: "var(--surface)" }}
                            >
                                <option value="online">온라인 쇼핑몰</option>
                                <option value="linkmom">링크맘 제휴 매장</option>
                                <option value="offline">오프라인 (기타)</option>
                                <option value="other">기타</option>
                            </select>
                        </div>

                        <div className="flex gap-4">
                            <div style={{ flex: 1 }}>
                                <label className="text-sm mb-2 block">정가</label>
                                <input
                                    type="number"
                                    value={priceRegular}
                                    onChange={(e) => setPriceRegular(e.target.value)}
                                    className="input-field"
                                    placeholder="0"
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label className="text-sm mb-2 block">구매가(할인가)</label>
                                <input
                                    type="number"
                                    value={priceDiscount}
                                    onChange={(e) => setPriceDiscount(e.target.value)}
                                    className="input-field"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm mb-2 block">구매 형태</label>
                            <div className="flex gap-2">
                                {[
                                    { id: "direct", label: "직접 구매" },
                                    { id: "gift", label: "선물 받음" },
                                    { id: "secondhand", label: "중고 구매" }
                                ].map((type) => (
                                    <button
                                        key={type.id}
                                        type="button"
                                        onClick={() => setPurchaseType(type.id)}
                                        className={`card flex-center ${purchaseType === type.id ? "btn-primary" : ""}`}
                                        style={{ flex: 1, padding: "12px", fontSize: 14, border: purchaseType === type.id ? "none" : "1px solid var(--border)" }}
                                    >
                                        {type.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {purchaseType === "gift" && (
                            <div>
                                <label className="text-sm mb-2 block">선물 주신 분</label>
                                <input
                                    type="text"
                                    value={giftGiver}
                                    onChange={(e) => setGiftGiver(e.target.value)}
                                    className="input-field"
                                    placeholder="예: 이모, 할머니"
                                />
                            </div>
                        )}
                    </div>
                </section>

                {/* 3. 후기 및 사용 기록 */}
                <section>
                    <h3 className="text-h3 mb-4" style={{ color: "var(--primary)" }}>후기 및 사용 기록</h3>
                    <div className="flex-col gap-4">
                        <div>
                            <label className="text-sm mb-2 block">만족도</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                    >
                                        <Star
                                            size={32}
                                            fill={star <= rating ? "#FFB74D" : "none"}
                                            color={star <= rating ? "#FFB74D" : "var(--border)"}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="text-sm mb-2 block">사용 후기</label>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="card w-full p-4"
                                rows={4}
                                placeholder="장단점, 사용 꿀팁 등을 기록해보세요."
                                style={{ resize: "none" }}
                            />
                        </div>

                        <div>
                            <label className="text-sm mb-2 block">사진 첨부</label>
                            <button type="button" className="card flex-center" style={{ width: 80, height: 80, borderStyle: "dashed" }}>
                                <Camera size={24} color="var(--text-muted)" />
                            </button>
                        </div>

                        <div className="flex-between card p-4">
                            <span className="text-sm font-bold">재구매 의사 있음</span>
                            <input
                                type="checkbox"
                                checked={repurchase}
                                onChange={(e) => setRepurchase(e.target.checked)}
                                style={{ width: 20, height: 20 }}
                            />
                        </div>

                        <div>
                            <label className="text-sm mb-2 block">사용 기간</label>
                            <div className="flex gap-2 items-center">
                                <input
                                    type="date"
                                    value={usageStart}
                                    onChange={(e) => setUsageStart(e.target.value)}
                                    className="input-field"
                                    style={{ flex: 1 }}
                                />
                                <span>~</span>
                                <input
                                    type="date"
                                    value={usageEnd}
                                    onChange={(e) => setUsageEnd(e.target.value)}
                                    className="card p-3"
                                    style={{ flex: 1 }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <button type="submit" className="btn btn-primary w-full py-4 text-lg font-bold mt-4">
                    저장하기
                </button>
            </form>
        </div>
    );
}
