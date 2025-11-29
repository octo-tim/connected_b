"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Baby, ChevronRight } from "lucide-react";

export default function LandingPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/main");
    }
  }, [isAuthenticated, router]);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      login({ name, email: "demo@example.com" });
      router.push("/onboarding");
    }
  };

  return (
    <div className="flex-col" style={{ height: "100vh", padding: "40px 24px", justifyContent: "center" }}>
      <div className="flex-center" style={{ marginBottom: "40px" }}>
        <div style={{ background: "var(--primary-light)", padding: "20px", borderRadius: "50%" }}>
          <Baby size={48} color="var(--primary)" />
        </div>
      </div>

      <h1 className="text-h1" style={{ textAlign: "center", marginBottom: "12px" }}>connectedB</h1>
      <p className="text-body" style={{ textAlign: "center", color: "var(--text-secondary)", marginBottom: "48px" }}>
        현명한 부모를 위한<br />데이터 기반 육아 플랫폼
      </p>

      <form onSubmit={handleStart} className="flex-col gap-4">
        <div>
          <label className="text-sm" style={{ display: "block", marginBottom: "8px" }}>어떻게 불러드릴까요?</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="닉네임을 입력해주세요"
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              fontSize: "16px",
              outline: "none"
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", marginTop: "16px" }}
        >
          육아 여정 시작하기
          <ChevronRight size={20} style={{ marginLeft: "8px" }} />
        </button>
      </form>
    </div>
  );
}
