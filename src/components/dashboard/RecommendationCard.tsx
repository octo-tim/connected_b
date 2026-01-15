import { ChevronRight } from 'lucide-react';

export default function RecommendationCard() {
    return (
        <div className="mx-4 p-5 rounded-2xl bg-brand-coral text-white relative overflow-hidden shadow-lg">
            <div className="relative z-10">
                <h2 className="text-sm font-medium opacity-90 mb-1">오늘의 추천</h2>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">터미 타임</h3>
                        <button className="bg-white text-brand-coral px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-sm active:scale-95 transition-transform">
                            가이드 보기
                            <ChevronRight size={16} className="ml-1" />
                        </button>
                    </div>
                    {/* Detailed visual or illustration could go here */}
                </div>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-full translate-x-10 translate-y-10" />
            <div className="absolute right-10 top-0 w-16 h-16 bg-white/10 rounded-full -translate-y-1/2" />
        </div>
    );
}
