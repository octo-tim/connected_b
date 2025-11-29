"use client";

import { useState } from "react";
import { Map, MapPin, Search, Star, Navigation, Filter } from "lucide-react";

const PLACES = [
    { id: 1, name: "링크맘 송파점", type: "shopping", lat: 50, lng: 50, dist: "0.3km", rating: 4.8, review: 120, isLinkMom: true, event: "유모차 조립 무료" },
    { id: 2, name: "튼튼 소아과", type: "medical", lat: 30, lng: 40, dist: "0.5km", rating: 4.5, review: 85, isLinkMom: false },
    { id: 3, name: "꿈나무 어린이집", type: "care", lat: 70, lng: 60, dist: "0.8km", rating: 4.2, review: 30, isLinkMom: false },
    { id: 4, name: "키즈킹덤 키즈카페", type: "activity", lat: 20, lng: 80, dist: "1.2km", rating: 4.7, review: 210, isLinkMom: false },
    { id: 5, name: "서울 아동병원", type: "medical", lat: 80, lng: 20, dist: "1.5km", rating: 4.6, review: 150, isLinkMom: false },
    { id: 6, name: "베이비플러스 잠실", type: "shopping", lat: 40, lng: 70, dist: "1.8km", rating: 4.3, review: 45, isLinkMom: false },
    { id: 7, name: "송파 어린이 도서관", type: "activity", lat: 60, lng: 30, dist: "2.1km", rating: 4.9, review: 320, isLinkMom: false },
    { id: 8, name: "아이사랑 산후조리원", type: "care", lat: 10, lng: 50, dist: "2.5km", rating: 4.8, review: 90, isLinkMom: false },
    { id: 9, name: "링크맘 강남점", type: "shopping", lat: 90, lng: 90, dist: "3.2km", rating: 4.7, review: 200, isLinkMom: true, event: "오픈 1주년 행사" },
    { id: 10, name: "365일 야간진료 소아과", type: "medical", lat: 25, lng: 25, dist: "0.4km", rating: 4.4, review: 500, isLinkMom: false },
];

export default function MapPage() {
    const [radius, setRadius] = useState("1km");
    const [activeCat, setActiveCat] = useState("all");
    const [selectedPlace, setSelectedPlace] = useState<number | null>(null);

    const filteredPlaces = PLACES.filter(p => activeCat === "all" || p.type === activeCat);

    return (
        <div className="flex-col" style={{ minHeight: "100vh", paddingBottom: 100 }}>
            {/* Header & Search */}
            <div className="p-4 bg-white sticky top-0 z-10" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="flex-center gap-2 mb-4">
                    <Map size={24} color="var(--primary)" />
                    <h1 className="text-h1">내 주변 육아지도</h1>
                </div>

                <div className="flex gap-2">
                    <div className="card flex-center p-3" style={{ flex: 1, justifyContent: "flex-start", gap: 8, background: "var(--surface)" }}>
                        <Search size={18} color="var(--text-secondary)" />
                        <input
                            type="text"
                            placeholder="장소, 서비스 검색"
                            style={{ border: "none", background: "transparent", width: "100%", outline: "none" }}
                        />
                    </div>
                    <button className="btn btn-outline p-3">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="p-4 pb-0 flex gap-2 overflow-x-auto no-scrollbar">
                {["all", "medical", "care", "activity", "shopping"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCat(cat)}
                        className={`badge ${activeCat === cat ? "btn-primary" : "btn-outline"}`}
                        style={{
                            padding: "8px 12px",
                            borderRadius: 20,
                            fontSize: 14,
                            whiteSpace: "nowrap",
                            border: activeCat === cat ? "none" : "1px solid var(--border)"
                        }}
                    >
                        {cat === "all" && "전체"}
                        {cat === "medical" && "의료/병원"}
                        {cat === "care" && "돌봄/교육"}
                        {cat === "activity" && "활동/문화"}
                        {cat === "shopping" && "쇼핑/마트"}
                    </button>
                ))}
            </div>

            <div className="p-4 flex gap-2">
                {["1km", "3km", "5km"].map((r) => (
                    <button
                        key={r}
                        onClick={() => setRadius(r)}
                        className="text-xs font-bold"
                        style={{
                            color: radius === r ? "var(--primary)" : "var(--text-secondary)",
                            textDecoration: radius === r ? "underline" : "none"
                        }}
                    >
                        반경 {r}
                    </button>
                ))}
            </div>

            {/* Map Area (Mock) */}
            <div style={{ height: 300, background: "#e0f7fa", position: "relative", overflow: "hidden", margin: "0 16px", borderRadius: 16 }}>
                {/* Mock Roads */}
                <div style={{ position: "absolute", top: "40%", left: 0, right: 0, height: 20, background: "white", transform: "rotate(10deg)" }} />
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "60%", width: 20, background: "white", transform: "rotate(10deg)" }} />

                {/* Current Location */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 2 }}>
                    <div style={{ width: 16, height: 16, background: "var(--primary)", borderRadius: "50%", border: "2px solid white", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} />
                    <div style={{ width: 40, height: 40, background: "var(--primary)", borderRadius: "50%", opacity: 0.2, position: "absolute", top: -12, left: -12, animation: "pulse 2s infinite" }} />
                </div>

                {/* Places Pins */}
                {filteredPlaces.map((place) => (
                    <button
                        key={place.id}
                        onClick={() => setSelectedPlace(place.id)}
                        style={{
                            position: "absolute",
                            top: `${place.lat}%`,
                            left: `${place.lng}%`,
                            transform: "translate(-50%, -100%)",
                            zIndex: selectedPlace === place.id ? 10 : 1
                        }}
                    >
                        <div className="flex-col items-center">
                            <div style={{
                                background: place.isLinkMom ? "var(--primary)" : "white",
                                padding: "4px 8px",
                                borderRadius: 8,
                                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                fontSize: 10,
                                fontWeight: "bold",
                                color: place.isLinkMom ? "white" : "black",
                                whiteSpace: "nowrap",
                                marginBottom: 4
                            }}>
                                {place.name}
                            </div>
                            <MapPin
                                size={24}
                                fill={place.isLinkMom ? "var(--primary)" : "var(--secondary)"}
                                color={place.isLinkMom ? "white" : "white"}
                            />
                        </div>
                    </button>
                ))}
            </div>

            {/* Place List */}
            <div className="p-4 flex-col gap-4">
                <h3 className="text-h3">추천 장소 ({filteredPlaces.length})</h3>

                {filteredPlaces.map((place) => (
                    <div
                        key={place.id}
                        className="card"
                        style={{
                            border: selectedPlace === place.id ? "2px solid var(--primary)" : "none",
                            background: place.isLinkMom ? "var(--surface)" : "white"
                        }}
                        onClick={() => setSelectedPlace(place.id)}
                    >
                        <div className="flex-between mb-2">
                            <div className="flex gap-2 items-center">
                                <span className="font-bold text-sm">{place.name}</span>
                                {place.isLinkMom && (
                                    <span className="badge" style={{ background: "var(--primary)", color: "white", fontSize: 10, padding: "2px 6px", borderRadius: 4 }}>
                                        LinkMom
                                    </span>
                                )}
                            </div>
                            <span className="text-xs text-secondary">{place.dist}</span>
                        </div>

                        <div className="flex items-center gap-1 mb-2">
                            <Star size={14} fill="#FFB74D" color="#FFB74D" />
                            <span className="text-sm font-bold">{place.rating}</span>
                            <span className="text-xs text-secondary">({place.review})</span>
                            <span className="text-xs text-secondary mx-1">|</span>
                            <span className="text-xs text-secondary">
                                {place.type === "medical" && "의료"}
                                {place.type === "care" && "돌봄"}
                                {place.type === "activity" && "활동"}
                                {place.type === "shopping" && "쇼핑"}
                            </span>
                        </div>

                        {place.event && (
                            <div className="text-xs p-2 rounded mb-2" style={{ background: "rgba(255, 138, 128, 0.1)", color: "var(--primary)", fontWeight: "bold" }}>
                                🎉 {place.event}
                            </div>
                        )}

                        <div className="flex gap-2 mt-2">
                            <button className="btn btn-outline flex-center" style={{ flex: 1, padding: "8px", fontSize: 12 }}>
                                <Navigation size={14} style={{ marginRight: 4 }} /> 길찾기
                            </button>
                            <button className="btn btn-primary flex-center" style={{ flex: 1, padding: "8px", fontSize: 12 }}>
                                상세보기
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
