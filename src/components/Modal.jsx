import { X, ChevronDown } from 'lucide-react';

export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="relative z-50 w-[500px] bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Create New Knowledge Base
              </h2>
              <p className="text-[13px] text-gray-400 mt-1">
                Best for quick answers from documents, websites and text files.
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        <div className="h-px bg-gray-100 w-full" />

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-2">
              Name (Cannot be edited later) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-200 px-4 py-2.5 rounded-lg text-sm outline-none focus:border-indigo-500 placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Description"
              className="w-full border border-gray-200 px-4 py-2.5 rounded-lg text-sm outline-none focus:border-indigo-500 resize-none placeholder-gray-300"
            />
          </div>

          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-2">
              Vector Store *
            </label>
            <div className="relative">
              <select className="w-full appearance-none border border-gray-200 px-4 py-2.5 rounded-lg text-sm bg-white text-gray-600 outline-none">
                <option>Qdrant</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-2">
              LLM Embedding Model *
            </label>
            <div className="relative">
              <select className="w-full appearance-none border border-gray-200 px-4 py-2.5 rounded-lg text-sm bg-white text-gray-600 outline-none">
                <option>text-embedding-ada-002</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-100 flex justify-end">
          <button className="bg-[#4F46E5] text-white px-12 py-3 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}