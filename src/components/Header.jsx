import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    // w-full makes it span the whole screen edge-to-edge
    <header className="h-[60px] bg-[#1e1b4b] flex items-center justify-between px-6 text-white w-full shrink-0 z-10 shadow-sm">
      
      {/* Brand Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {/* Logo container matching the tilt/style in image_5da967.png */}
          <div className="w-8 h-8 bg-[#4f46e5] rounded-lg flex items-center justify-center font-bold text-xl italic transform -rotate-6 shadow-md">
            α
          </div>
          <span className="font-bold text-xl tracking-tight">Worcspace</span>
        </div>
        
        <button className="flex items-center font-bold gap-2 bg-[#3c377e] [#2d2a5d] px-3 py-1.5 rounded-full text-[11px] border border-indigo-900/40 hover:bg-[#37346b] transition-all">
          Worcspace 1
          <ChevronDown size={14} className="text-gray-400" />
        </button>
      </div>

      {/* Global Search Section */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group">
          <Search className="absolute left-3.5 top-2.5 text-gray-400 group-focus-within:text-indigo-300 transition-colors" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#65609b] bg-opacity-60 border border-indigo-900/40 rounded-lg py-2 pl-11 pr-12 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-gray-500"
          />
          <div className="absolute right-4 top-2.5 text-gray-500 text-[10px] font-mono select-none">
            ⌘K
          </div>
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-5">
        <button className="text-gray-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0.5 right-0.5 w-2 h-2  rounded-full border-2 border-[#1e1b4b]"></span>
        </button>
        <div className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center text-[12px] font-bold border-2 border-[#312e81] shadow-lg cursor-pointer">
          GK
        </div>
      </div>
    </header>
  );
}