"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Purchase {
    id: number;
    name: string;
    date: string;
    cat: string;
    price: number;
    channel: string;
    curationItemId?: number; // ID of the corresponding item in CurationPage
}

interface PurchaseContextType {
    purchases: Purchase[];
    addPurchase: (purchase: Omit<Purchase, "id">) => void;
}

const PurchaseContext = createContext<PurchaseContextType | undefined>(undefined);

const INITIAL_PURCHASES: Purchase[] = [
    { id: 1, name: "하기스 네이처메이드 2단계", date: "2023.11.28", cat: "위생", price: 54900, channel: "링크맘", curationItemId: 9 }, // 기저귀
    { id: 2, name: "브라운 체온계 IRT-6520", date: "2023.11.25", cat: "건강", price: 89000, channel: "온라인", curationItemId: 14 }, // 체온계
    { id: 3, name: "튤립 사운드북 5권 세트", date: "2023.11.20", cat: "놀이", price: 65000, channel: "선물" },
    { id: 4, name: "스토케 트립트랩", date: "2023.11.15", cat: "가구", price: 390000, channel: "온라인" },
    { id: 5, name: "밤부베베 손수건 10장", date: "2023.11.10", cat: "의류", price: 25000, channel: "링크맘", curationItemId: 8 }, // 손수건
    { id: 6, name: "압타밀 프로푸트라 800g", date: "2023.11.05", cat: "수유", price: 35000, channel: "온라인" },
];

export function PurchaseProvider({ children }: { children: React.ReactNode }) {
    const [purchases, setPurchases] = useState<Purchase[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("conectedB_purchases");
        if (stored) {
            setPurchases(JSON.parse(stored));
        } else {
            setPurchases(INITIAL_PURCHASES);
            localStorage.setItem("conectedB_purchases", JSON.stringify(INITIAL_PURCHASES));
        }
    }, []);

    const addPurchase = (purchase: Omit<Purchase, "id">) => {
        const newPurchase = { ...purchase, id: Date.now() };
        const updated = [newPurchase, ...purchases];
        setPurchases(updated);
        localStorage.setItem("conectedB_purchases", JSON.stringify(updated));
    };

    return (
        <PurchaseContext.Provider value={{ purchases, addPurchase }}>
            {children}
        </PurchaseContext.Provider>
    );
}

export function usePurchase() {
    const context = useContext(PurchaseContext);
    if (context === undefined) {
        throw new Error("usePurchase must be used within a PurchaseProvider");
    }
    return context;
}
