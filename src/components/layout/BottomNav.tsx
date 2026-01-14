import Link from 'next/link';
import { Home, BookOpen, Map, ShoppingBag, TrendingUp, FileText, Flame, User } from 'lucide-react';

const navItems = [
  { label: '홈', icon: Home, href: '/', active: true },
  { label: '가이드', icon: BookOpen, href: '/guide' },
  { label: '지도', icon: Map, href: '/map' },
  { label: '중고', icon: ShoppingBag, href: '/used' },
  { label: '트렌드', icon: TrendingUp, href: '/trend' },
  { label: '구매기록', icon: FileText, href: '/record' },
  { label: '핫딜', icon: Flame, href: '/deal' },
  { label: '내 정보', icon: User, href: '/my' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 safe-area-bottom z-50">
      <div className="grid grid-cols-8 gap-1 px-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center p-1 ${
              item.active ? 'text-brand-coral' : 'text-gray-500'
            }`}
          >
            <item.icon size={20} strokeWidth={2} />
            <span className="text-[10px] mt-1 whitespace-nowrap">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
