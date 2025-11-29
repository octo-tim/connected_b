"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Camera, MapPin } from "lucide-react";

export default function NewMarketItemPage() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [isFree, setIsFree] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("상품이 등록되었습니다.");
        router.back();
    };

    return (
        <div className="flex-col" style={{ minHeight: "100vh", padding: "24px", paddingBottom: "100px" }}>
            {/* Header */}
            <div className="flex-between mb-4">
                <button onClick={() => router.back()}>
                    <ChevronLeft size={24} />
                </button>
                <h1 className="text-h2">내 물건 팔기</h1>
                <div style={{ width: 24 }} />
            </div>

            <form onSubmit={handleSubmit} className="flex-col gap-6">
                {/* Photos */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
                    <button type="button" className="card flex-center flex-col gap-1" style={{ width: 80, height: 80, borderStyle: "dashed", flexShrink: 0 }}>
                        <Camera size={24} color="var(--text-muted)" />
                        <span className="text-xs text-secondary">0/10</span>
                    </button>
                </div>

                {/* Title */}
                <div>
                    <label className="text-sm font-bold mb-2 block">제목</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input-field"
                        placeholder="글 제목"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="text-sm font-bold mb-2 block">카테고리</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="input-field"
                        style={{ background: "var(--surface)" }}
                    >
                        <option value="">카테고리 선택</option>
                        <option value="furniture">가구/침대/매트</option>
                        <option value="clothing">의류/잡화</option>
                        <option value="toy">장난감/교구</option>
                        <option value="feeding">수유/이유식</option>
                        <option value="stroller">유모차/카시트</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="text-sm font-bold mb-2 block">가격</label>
                    <div className="flex items-center gap-4">
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="input-field"
                            style={{ flex: 1 }}
                            placeholder="가격 입력 (원)"
                            disabled={isFree}
                        />
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isFree}
                                onChange={(e) => {
                                    setIsFree(e.target.checked);
                                    if (e.target.checked) setPrice("0");
                                }}
                                style={{ width: 20, height: 20 }}
                            />
                            <span className="text-sm">무료나눔</span>
                        </label>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="text-sm font-bold mb-2 block">자세한 설명</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="card w-full p-4"
                        rows={6}
                        placeholder="구매 시기, 사용 기간, 하자 여부 등 신뢰할 수 있는 거래를 위해 자세히 적어주세요."
                        style={{ resize: "none" }}
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="text-sm font-bold mb-2 block">거래 희망 장소</label>
                    <div className="card p-4 flex-between">
                        <div className="flex items-center gap-2">
                            <MapPin size={20} />
                            <span>송파구 잠실동</span>
                        </div>
                        <span className="text-xs text-primary font-bold">위치 변경</span>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-full py-4 text-lg font-bold mt-4">
                    등록 완료
                </button>
            </form>
        </div>
    );
}
