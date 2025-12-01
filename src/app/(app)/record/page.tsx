"use client";

import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { usePurchase } from "@/context/PurchaseContext";

export default function RecordPage() {
    const { purchases } = usePurchase();

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
                {purchases.map((item) => (
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
