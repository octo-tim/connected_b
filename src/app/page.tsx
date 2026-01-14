import Header from '@/components/dashboard/Header';
import RecommendationCard from '@/components/dashboard/RecommendationCard';
import PreparationProgress from '@/components/dashboard/PreparationProgress';
import PurchaseRecord from '@/components/dashboard/PurchaseRecord';
import BottomNav from '@/components/layout/BottomNav';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen pb-20 max-w-md mx-auto shadow-2xl overflow-hidden relative">
      <Header />
      <RecommendationCard />
      <PreparationProgress />
      <PurchaseRecord />
      <BottomNav />
    </main>
  );
}
