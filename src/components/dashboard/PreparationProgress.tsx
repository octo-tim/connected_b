export default function PreparationProgress() {
    const current = 12;
    const total = 27;
    const percentage = Math.round((current / total) * 100);

    return (
        <div className="mx-4 mt-6 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-end mb-3">
                <h3 className="font-bold text-gray-800 text-lg">Essential Preparation</h3>
                <span className="text-2xl font-bold text-brand-teal">
                    {current} <span className="text-gray-400 text-base font-normal">/ {total}</span>
                </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div
                    className="bg-brand-teal h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <p className="text-right text-xs text-gray-400 mt-2">{percentage}% Completed</p>
        </div>
    );
}
