import { MoreVertical } from 'lucide-react';

export default function Card({ title, desc, date }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-[#1a1a1a] text-sm">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={1} />
        </button>
      </div>

      {/* Content - flex-grow pushes the footer down */}
      <p className="text-gray-500 text-xs leading-relaxed mb-7 flex-grow overflow-hidden">
        {desc}
      </p>

      {/* Line and Date Section */}
      <div className="border-t border-gray-100 pt-4 mt-auto">
        <p className="text-[12px] text-gray-400">
          Created On: <span className="font-medium">{date}</span>
        </p>
      </div>
    </div>
  );
}