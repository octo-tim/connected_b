"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, ListChecks, Receipt, Tag, TrendingUp, Map as MapIcon, ShoppingBag } from "lucide-react";

export default function BottomNav() {
    const router = useRouter();
    const pathname = usePathname();

    const tabs = [
        { id: "home", label: "홈", icon: Home, path: "/main" },
        { id: "curation", label: "가이드", icon: ListChecks, path: "/curation" },
        { id: "map", label: "지도", icon: MapIcon, path: "/map" },
        { id: "market", label: "중고", icon: ShoppingBag, path: "/market" },
        { id: "trends", label: "트렌드", icon: TrendingUp, path: "/trends" },
        { id: "record", label: "구매기록", icon: Receipt, path: "/record" },
        { id: "deals", label: "핫딜", icon: Tag, path: "/deals" },
    ];

    return (
        <div style={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "480px",
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-around",
            padding: "12px 0 24px 0", // Extra padding for safe area
            zIndex: 100
        }}>
            {tabs.map((tab) => {
                const isActive = pathname === tab.path;
                return (
                    <button
                        key={tab.id}
                        onClick={() => router.push(tab.path)}
                        className="flex-col flex-center"
                        style={{ flex: 1, gap: 4 }}
                    >
                        <tab.icon
                            size={24}
                            color={isActive ? "var(--primary)" : "var(--text-muted)"}
                            strokeWidth={isActive ? 2.5 : 2}
                        />
                        <span style={{
                            fontSize: 10,
                            fontWeight: isActive ? 600 : 400,
                            color: isActive ? "var(--primary)" : "var(--text-muted)"
                        }}>
                            {tab.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
