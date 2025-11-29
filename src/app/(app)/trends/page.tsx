"use client";

import { useState } from "react";
import { BarChart3, MapPin, Filter, TrendingUp, Store, X } from "lucide-react";

export default function TrendsPage() {
    const [activeTab, setActiveTab] = useState("similar"); // similar, linkmom
    const [showFilterModal, setShowFilterModal] = useState(false);

    // Filter State
    const [filters, setFilters] = useState({
        age: "생후 3개월",
        housing: "아파트 거주",
        budget: "가성비 중시",
        location: "서울 강남구"
    });

    // Temporary state for modal
    const [tempFilters, setTempFilters] = useState(filters);

    const openFilter = () => {
        setTempFilters(filters);
        setShowFilterModal(true);
    };

    const applyFilter = () => {
        setFilters(tempFilters);
        setShowFilterModal(false);
    };

    return (
        <div className="flex-col gap-4 p-4" style={{ minHeight: "100vh", paddingBottom: 100 }}>
            <div className="flex-center gap-2 mb-2">
                <TrendingUp size={24} color="var(--primary)" />
                <h1 className="text-h1">구매 트렌드</h1>
            </div>
            <p className="text-sm text-secondary mb-4">
                나와 비슷한 부모들의 실제 구매 패턴을 확인해보세요.
            </p>

            {/* Filter Section */}
            <div className="card p-4 mb-4" style={{ background: "var(--surface)" }}>
                <div className="flex-between mb-3">
                    <h3 className="text-h3 flex-center gap-2">
                        <Filter size={16} /> 맞춤 필터
                    </h3>
                    <button
                        onClick={openFilter}
                        className="text-xs text-primary font-bold"
                    >
                        설정 변경
                    </button>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <span className="badge" style={{ background: "var(--primary-light)", color: "var(--primary)", padding: "4px 8px", borderRadius: 4, fontSize: 12 }}>
                        {filters.age}
                    </span>
                    <span className="badge" style={{ background: "var(--secondary-light)", color: "var(--secondary)", padding: "4px 8px", borderRadius: 4, fontSize: 12 }}>
                        {filters.housing}
                    </span>
                    <span className="badge" style={{ background: "#F5F5F5", color: "#616161", padding: "4px 8px", borderRadius: 4, fontSize: 12 }}>
                        {filters.budget}
                    </span>
                    <span className="badge" style={{ background: "#F5F5F5", color: "#616161", padding: "4px 8px", borderRadius: 4, fontSize: 12 }}>
                        {filters.location}
                    </span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex mb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                    onClick={() => setActiveTab("similar")}
                    style={{
                        flex: 1,
                        padding: "12px",
                        borderBottom: activeTab === "similar" ? "2px solid var(--primary)" : "none",
                        color: activeTab === "similar" ? "var(--primary)" : "var(--text-secondary)",
                        fontWeight: activeTab === "similar" ? "bold" : "normal"
                    }}
                >
                    비슷한 부모들의 선택
                </button>
                <button
                    onClick={() => setActiveTab("linkmom")}
                    style={{
                        flex: 1,
                        padding: "12px",
                        borderBottom: activeTab === "linkmom" ? "2px solid var(--primary)" : "none",
                        color: activeTab === "linkmom" ? "var(--primary)" : "var(--text-secondary)",
                        fontWeight: activeTab === "linkmom" ? "bold" : "normal"
                    }}
                >
                    링크맘 매장 베스트
                </button>
            </div>

            {activeTab === "similar" ? (
                <div className="flex-col gap-4">
                    <div className="flex-between">
                        <h3 className="text-h3">TOP 5 구매 리스트</h3>
                        <span className="text-xs text-secondary">최근 30일 기준</span>
                    </div>

                    {[
                        { rank: 1, name: "국민 아기띠 에어", cat: "외출", rate: "45%" },
                        { rank: 2, name: "안심 젖병 160ml", cat: "수유", rate: "38%" },
                        { rank: 3, name: "순면 배냇저고리 세트", cat: "의류", rate: "32%" },
                        { rank: 4, name: "프리미엄 기저귀 1단계", cat: "위생", rate: "28%" },
                        { rank: 5, name: "방수요 대형", cat: "수면", rate: "25%" },
                        { rank: 6, name: "타이니러브 모빌", cat: "놀이", rate: "22%" },
                        { rank: 7, name: "브라운 체온계", cat: "건강", rate: "19%" },
                        { rank: 8, name: "튤립 사운드북", cat: "놀이", rate: "15%" },
                        { rank: 9, name: "역류방지쿠션", cat: "수유", rate: "12%" },
                        { rank: 10, name: "아기 비데", cat: "위생", rate: "10%" },
                    ].map((item) => (
                        <div key={item.rank} className="card flex-between">
                            <div className="flex-center gap-4">
                                <div className="flex-center" style={{ width: 24, height: 24, background: item.rank <= 3 ? "var(--primary)" : "#eee", color: item.rank <= 3 ? "white" : "#666", borderRadius: "50%", fontSize: 12, fontWeight: "bold" }}>
                                    {item.rank}
                                </div>
                                <div>
                                    <div className="font-bold text-sm">{item.name}</div>
                                    <div className="text-xs text-secondary">{item.cat}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-secondary">구매율</div>
                                <div className="font-bold text-primary">{item.rate}</div>
                            </div>
                        </div>
                    ))}

                    {/* Insight Card */}
                    <div className="card mt-2" style={{ background: "#FFF8E1", border: "1px solid #FFECB3" }}>
                        <h4 className="font-bold text-sm mb-2 flex-center gap-2" style={{ justifyContent: "flex-start" }}>
                            <BarChart3 size={16} /> 구매 인사이트
                        </h4>
                        <p className="text-sm mb-3">
                            이 시기 부모님들은 <strong>유모차</strong>를 직접 구매하기보다 <strong>선물</strong>로 받는 비율이 <strong>60%</strong> 더 높아요!
                        </p>
                        <div style={{ height: 8, background: "white", borderRadius: 4, overflow: "hidden", display: "flex" }}>
                            <div style={{ width: "40%", background: "var(--primary)", height: "100%" }} />
                            <div style={{ width: "60%", background: "var(--secondary)", height: "100%" }} />
                        </div>
                        <div className="flex-between mt-1">
                            <span className="text-xs">직접 구매 40%</span>
                            <span className="text-xs">선물 받음 60%</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-col gap-4">
                    <div className="card p-4 flex-between" style={{ background: "var(--secondary-light)" }}>
                        <div className="flex-center gap-3">
                            <Store size={24} color="var(--secondary)" />
                            <div>
                                <div className="font-bold text-sm" style={{ color: "#00695C" }}>링크맘 송파점</div>
                                <div className="text-xs" style={{ color: "#004D40" }}>내 단골 매장 설정됨</div>
                            </div>
                        </div>
                        <button className="text-xs font-bold" style={{ color: "#00695C", textDecoration: "underline" }}>변경</button>
                    </div>

                    <div className="flex-between">
                        <h3 className="text-h3">매장 베스트셀러</h3>
                        <span className="text-xs text-secondary">실시간 집계</span>
                    </div>

                    {[
                        { rank: 1, name: "휴대용 유모차 V2", price: "299,000", tag: "매장단독특가" },
                        { rank: 2, name: "유기농 아기과자 10팩", price: "25,000", tag: "1+1 행사" },
                        { rank: 3, name: "층간소음 매트 4cm", price: "159,000", tag: "체험가능" },
                    ].map((item) => (
                        <div key={item.rank} className="card">
                            <div className="flex-between mb-2">
                                <span className="badge" style={{ fontSize: 10, background: "var(--error)", color: "white", padding: "2px 6px", borderRadius: 4 }}>
                                    {item.tag}
                                </span>
                                <span className="text-xs text-secondary">재고 여유</span>
                            </div>
                            <div className="flex gap-4">
                                <div style={{ width: 60, height: 60, background: "#eee", borderRadius: 8 }} />
                                <div>
                                    <div className="font-bold text-sm mb-1">{item.name}</div>
                                    <div className="text-sm">{item.price}원</div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="card p-4">
                        <h4 className="font-bold text-sm mb-2">매장 방문 혜택</h4>
                        <p className="text-xs text-secondary mb-2">
                            이번 주말 링크맘 송파점에 방문하시면 <strong>유모차 조립 서비스</strong>를 무료로 받으실 수 있어요.
                        </p>
                        <button className="btn btn-outline w-full" style={{ fontSize: 12, padding: "8px" }}>
                            <MapPin size={14} style={{ marginRight: 4 }} /> 매장 위치 보기
                        </button>
                    </div>
                </div>
            )}

            {/* Filter Modal */}
            {showFilterModal && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                    background: "rgba(0,0,0,0.5)", zIndex: 200,
                    display: "flex", alignItems: "flex-end", justifyContent: "center"
                }}>
                    <div style={{
                        background: "var(--surface)",
                        width: "100%", maxWidth: "480px",
                        borderTopLeftRadius: "20px", borderTopRightRadius: "20px",
                        padding: "24px",
                        animation: "slideUp 0.3s ease-out"
                    }}>
                        <div className="flex-between mb-6">
                            <h3 className="text-h2">맞춤 필터 설정</h3>
                            <button onClick={() => setShowFilterModal(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-col gap-6 mb-8">
                            <div>
                                <label className="text-sm font-bold mb-2 block">아이 월령</label>
                                <div className="flex gap-2 flex-wrap">
                                    {["생후 3개월", "생후 6개월", "돌 아기", "두돌 아기"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => setTempFilters({ ...tempFilters, age: opt })}
                                            className={`badge ${tempFilters.age === opt ? "btn-primary" : "btn-outline"}`}
                                            style={{ padding: "8px 12px", borderRadius: 20, fontSize: 14, border: tempFilters.age === opt ? "none" : "1px solid var(--border)" }}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-bold mb-2 block">주거 형태</label>
                                <div className="flex gap-2">
                                    {["아파트 거주", "주택 거주", "빌라 거주"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => setTempFilters({ ...tempFilters, housing: opt })}
                                            className={`badge ${tempFilters.housing === opt ? "btn-primary" : "btn-outline"}`}
                                            style={{ padding: "8px 12px", borderRadius: 20, fontSize: 14, border: tempFilters.housing === opt ? "none" : "1px solid var(--border)" }}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-bold mb-2 block">예산 성향</label>
                                <div className="flex gap-2">
                                    {["가성비 중시", "표준", "프리미엄"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => setTempFilters({ ...tempFilters, budget: opt })}
                                            className={`badge ${tempFilters.budget === opt ? "btn-primary" : "btn-outline"}`}
                                            style={{ padding: "8px 12px", borderRadius: 20, fontSize: 14, border: tempFilters.budget === opt ? "none" : "1px solid var(--border)" }}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={applyFilter}
                            className="btn btn-primary w-full"
                            style={{ width: "100%", padding: "16px", fontSize: 16 }}
                        >
                            적용하기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
