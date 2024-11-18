import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, X, LayoutDashboard, LineChart, Users, Settings, MessageSquare, Bell, Info } from "lucide-react";

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { icon: <LayoutDashboard className="h-4 w-4" />, label: "Dashboard", active: true },
    { icon: <LineChart className="h-4 w-4" />, label: "Analytics" },
    { icon: <Users className="h-4 w-4" />, label: "Customers" },
    { icon: <MessageSquare className="h-4 w-4" />, label: "Messages" },
    { icon: <Bell className="h-4 w-4" />, label: "Notifications" },
    { icon: <Settings className="h-4 w-4" />, label: "Settings" },
    { icon: <Info className="h-4 w-4" />, label: "Help Center" },
  ];

  return (
    <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#222436] flex flex-col">
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-semibold">A</span>
            </div>
            <span className="text-xl font-semibold text-white">Apexify</span>
          </div>
          <button 
            onClick={onClose} 
            className="md:hidden text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center gap-3 p-2 text-sm rounded-lg ${
                  item.active 
                    ? "text-white bg-primary/10" 
                    : "text-gray-400 hover:bg-primary/10"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="pt-2 border-t border-gray-700">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-3 w-full p-2 text-sm text-gray-400 rounded-lg hover:bg-primary/10"
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;