import { 
  Bot, Cpu, Columns3, Box, Monitor, Layers, Zap, Play, 
  SquarePlay, Shield, BookOpen, Database, UserSquare2, Compass 
} from 'lucide-react';

export default function Sidebar({ activeItem, setActiveItem }) {
  const menuGroups = [
    {
      title: "MY PROJECTS",
      items: [
        { id: "agents", name: "Agents", icon: <Bot size={18} /> },
        { id: "aimodels", name: "AI Models", icon: <Cpu size={18} /> },
        { id: "library", name: "Library", icon: <Columns3 size={18} /> },
      ]
    },
    {
      title: "ORCHESTRATOR",
      items: [
        { id: "published", name: "Published", icon: <Box size={18} /> },
        { id: "machines", name: "Machines", icon: <Monitor size={18} /> },
        { id: "queues", name: "Queues", icon: <Layers size={18} /> },
        { id: "triggers", name: "Triggers", icon: <Zap size={18} /> },
        { id: "jobs", name: "Jobs", icon: <Play size={18} /> },
        { id: "executions", name: "Executions", icon: <SquarePlay size={18} /> },
        { id: "vault", name: "Vault", icon: <Shield size={18} /> },
        { id: "knowledgebase", name: "Knowledge Base", icon: <BookOpen size={18} /> },
        { id: "keystore", name: "Key Store", icon: <Database size={18} /> },
      ]
    },
    {
      title: "ADMIN",
      items: [
        { id: "tenant", name: "Tenant", icon: <UserSquare2 size={18} /> },
        { id: "integrations", name: "Integrations", icon: <Compass size={18} /> },
      ]
    }
  ];

  return (
    // h-full and overflow-hidden are key to preventing the sidebar scrollbar
    <aside className="p-5 bg-white border-r h-full flex flex-col overflow-hidden shrink-0 select-none">
      {menuGroups.map((group, i) => (
        <div key={i} className="mb-4">
          <h3 className="px-6 text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">
            {group.title}
          </h3>
          {group.items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`px-6 py-2 flex items-center gap-3 cursor-pointer relative transition-colors ${
                activeItem === item.id 
                ? "bg-[#EEF2FF] text-[#4F46E5]" 
                : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {/* Dark vertical indicator from reference image */}
              {activeItem === item.id && (
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1E1B4B]" />
              )}
              
              <span className={activeItem === item.id ? "text-[#4F46E5]" : "text-gray-400"}>
                {item.icon}
              </span>
              
              <span className={`text-[13px] ${activeItem === item.id ? "font-semibold" : "font-medium"}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
}