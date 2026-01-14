import { ChevronRight } from 'lucide-react';

const recentItems = [
    { id: 1, name: 'Organic Cotton Undershirt', price: '25,000', date: '2023.10.15' },
    { id: 2, name: 'Baby Bottle Set', price: '45,000', date: '2023.10.12' },
];

export default function PurchaseRecord() {
    return (
        <div className="mx-4 mt-6 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-24">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 text-lg">Recent Purchase Record</h3>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <ChevronRight size={20} />
                </button>
            </div>
            <div className="space-y-3">
                {recentItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                        <div>
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
                        </div>
                        <span className="font-bold text-gray-900">{item.price} won</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
