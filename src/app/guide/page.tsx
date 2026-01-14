import Header from '@/components/dashboard/Header';
import RecommendationCard from '@/components/dashboard/RecommendationCard';
import PreparationProgress from '@/components/dashboard/PreparationProgress';
import PurchaseRecord from '@/components/dashboard/PurchaseRecord';
import BottomNav from '@/components/layout/BottomNav';

export default function GuidePage() {
    return (
        <main className="bg-gray-50 min-h-screen pb-20 max-w-md mx-auto shadow-2xl overflow-hidden relative">
            <Header />
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">가이드 페이지</h1>
                <p className="text-gray-600 mb-4">여기는 가이드 내용을 보여주는 서브 페이지입니다.</p>
                {/* Reusing components for demonstration */}
                <RecommendationCard />
                <PreparationProgress />
                <PurchaseRecord />
            </div>
            <BottomNav />
        </main>
    );
}
