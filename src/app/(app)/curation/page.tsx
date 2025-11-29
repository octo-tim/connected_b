"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2, Circle } from "lucide-react";
import BuyingGuide from "@/components/BuyingGuide";

const CATEGORIES = [
    {
        id: "feeding",
        title: "수유",
        items: [
            { id: 1, name: "젖병 및 젖꼭지", type: "필수", completed: false },
            { id: 2, name: "젖병 세정제 및 솔", type: "필수", completed: false },
            { id: 3, name: "젖병 소독기", type: "필수", completed: false },
            { id: 4, name: "분유포트 / 제조기", type: "선택", completed: false },
            { id: 5, name: "수유쿠션", type: "선택", completed: false },
        ]
    },
    {
        id: "clothing",
        title: "의류",
        items: [
            { id: 6, name: "배냇저고리 (3~5벌)", type: "필수", completed: false },
            { id: 7, name: "속싸개 / 겉싸개", type: "필수", completed: false },
            { id: 8, name: "손수건 (30장 이상)", type: "필수", completed: false },
        ]
    },
    {
        id: "hygiene",
        title: "위생 & 목욕",
        items: [
            { id: 9, name: "기저귀 (신생아용)", type: "필수", completed: false },
            { id: 10, name: "물티슈", type: "필수", completed: false },
            { id: 11, name: "아기욕조", type: "필수", completed: false },
            { id: 12, name: "바디워시 및 로션", type: "필수", completed: false },
            { id: 13, name: "손톱깎이 세트", type: "필수", completed: false },
        ]
    },
    {
        id: "health",
        title: "건강 & 안전",
        items: [
            { id: 14, name: "체온계", type: "필수", completed: false },
            { id: 15, name: "온습도계", type: "필수", completed: false },
        ]
    },
    {
        id: "sleep",
        title: "수면",
        items: [
            { id: 16, name: "아기침대", type: "필수", completed: false },
            { id: 17, name: "방수요", type: "필수", completed: false },
        ]
    },
    {
        id: "outing",
        title: "외출",
        items: [
            { id: 18, name: "유모차", type: "필수", completed: false },
            { id: 19, name: "카시트", type: "필수", completed: false },
            { id: 20, name: "아기띠", type: "필수", completed: false },
        ]
    },
    {
        id: "play",
        title: "놀이",
        items: [
            { id: 21, name: "모빌", type: "선택", completed: false },
            { id: 22, name: "바운서", type: "선택", completed: false },
            { id: 23, name: "놀이방 매트", type: "필수", completed: false },
        ]
    }
];

export default function CurationPage() {
    const [expanded, setExpanded] = useState<string | null>("sleep");

    const toggle = (id: string) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="p-4 flex-col gap-4">
            <h1 className="text-h1">필수 준비 리스트</h1>
            <p className="text-sm text-secondary mb-4">
                아기 발달 단계에 맞춘 큐레이션 아이템입니다.
            </p>

            {CATEGORIES.map((cat) => (
                <div key={cat.id} className="card" style={{ padding: 0, overflow: "hidden" }}>
                    <button
                        onClick={() => toggle(cat.id)}
                        className="flex-between w-full p-4"
                        style={{ width: "100%", background: "var(--surface)" }}
                    >
                        <span className="text-h3">{cat.title}</span>
                        {expanded === cat.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    {expanded === cat.id && (
                        <div style={{ borderTop: "1px solid var(--border)" }}>
                            {cat.items.map((item) => (
                                <div key={item.id} className="flex-between p-4" style={{ borderBottom: "1px solid var(--border)" }}>
                                    <div className="flex-col gap-2">
                                        <span className="font-bold text-sm">{item.name}</span>
                                        <span className="text-xs" style={{
                                            color: item.type === "필수" ? "var(--primary)" : "var(--text-secondary)",
                                            fontWeight: 600
                                        }}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <button>
                                        {item.completed ? (
                                            <CheckCircle2 size={24} color="var(--success)" fill="var(--success-light)" />
                                        ) : (
                                            <Circle size={24} color="var(--border)" />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <BuyingGuide />
        </div>
    );
}
