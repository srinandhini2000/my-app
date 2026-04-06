import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import { Search, Plus } from 'lucide-react';

export default function KnowledgeBase() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("knowledgebase");
  // Keep this data constant so the background doesn't change
  const data = [...Array(6)];
  return (
    <div className="flex flex-col h-screen w-full bg-[#f9fafb] overflow-hidden relative">
      <Header onCreate={() => setOpen(true)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <main className="flex-1 p-8 flex flex-col overflow-hidden">
          {/* 1. Background Content: Always rendered */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#1a1a1a]">Knowledge Base</h1>
            <div className="flex gap-3">
              <div className="relative">
                 <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                 <input className="border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm w-72 focus:outline-none bg-white" placeholder="Search..." />
              </div>
              <button
                onClick={() => setOpen(true)}
                className="bg-[#4F46E5] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-indigo-700 transition-colors" >
                <Plus size={18} /> Create New
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((_, i) => (
              <Card
                key={i}
                title="Test"
                desc="Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.Lorem Ipsum has been the
                      industry standard dummy"
                date="14/07/2025"
              />
            ))}
          </div>
          <div className="mt-auto">
            <Pagination />
          </div>
        </main>
      </div>
      {/* 2. Popup Layer: Rendered ON TOP of the background */}
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}