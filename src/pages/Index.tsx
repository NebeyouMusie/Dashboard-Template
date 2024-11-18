import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar } from "recharts";
import { Sun, Moon, Menu, Download, MoreHorizontal } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const data = [
  { month: "Q1", revenue: 250000, target: 200000 },
  { month: "Q2", revenue: 300000, target: 250000 },
  { month: "Q3", revenue: 280000, target: 275000 },
  { month: "Q4", revenue: 348261, target: 300000 },
];

const sessionData = [
  { country: "United States", sessions: 85, flag: "🇺🇸" },
  { country: "Japan", sessions: 70, flag: "🇯🇵" },
  { country: "Indonesia", sessions: 45, flag: "🇮🇩" },
  { country: "South Korea", sessions: 38, flag: "🇰🇷" },
];

const transactions = [
  {
    id: 1,
    product: "TSLA",
    amount: "$348,261.12",
    date: "Jan 12, 2024",
    status: "Processing",
    user: "Olivia Berg",
    email: "olivia@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  },
  {
    id: 2,
    product: "MSFT",
    amount: "$15,708.98",
    date: "Jan 13, 2024",
    status: "Success",
    user: "Michael Chen",
    email: "michael@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  },
  {
    id: 3,
    product: "GOOGL",
    amount: "$7,415.64",
    date: "Jan 13, 2024",
    status: "Success",
    user: "Sarah Wilson",
    email: "sarah@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  },
];

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#222436]">
          <div className="flex items-center gap-2 mb-8 px-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-semibold">A</span>
            </div>
            <span className="text-xl font-semibold text-white">Apexify</span>
          </div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-white rounded-lg bg-primary/10">
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-400 rounded-lg hover:bg-primary/10">
                <span>Sales</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-400 rounded-lg hover:bg-primary/10">
                <span>Analytics</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className="p-4 md:ml-64">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-primary/10"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-600"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 animate-fade-in">
            <h3 className="text-gray-400 text-sm mb-1">Total Revenue</h3>
            <p className="text-2xl font-semibold">$348,261</p>
            <span className="text-green-500 text-sm">+2.45%</span>
          </div>
          <div className="p-4 rounded-lg bg-[#222436] animate-fade-in">
            <h3 className="text-gray-400 text-sm mb-1">Total Balance</h3>
            <p className="text-2xl font-semibold">$15,708.98</p>
            <span className="text-red-500 text-sm">-4.75%</span>
          </div>
          <div className="p-4 rounded-lg bg-[#222436] animate-fade-in">
            <h3 className="text-gray-400 text-sm mb-1">Total Sessions</h3>
            <p className="text-2xl font-semibold">7,415,644</p>
            <span className="text-red-500 text-sm">-1.91%</span>
          </div>
          <div className="p-4 rounded-lg bg-[#222436] animate-fade-in">
            <h3 className="text-gray-400 text-sm mb-1">Total Conversion</h3>
            <p className="text-2xl font-semibold">10.87%</p>
            <span className="text-green-500 text-sm">+4.15%</span>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-[#222436]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Revenue Analytics</h3>
              <button className="p-2 hover:bg-primary/10 rounded-lg">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#222436',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="target" stroke="#4ADE80" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 rounded-lg bg-[#222436]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Sessions by Country</h3>
              <button className="p-2 hover:bg-primary/10 rounded-lg">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              {sessionData.map((item) => (
                <div key={item.country} className="flex items-center gap-4">
                  <span className="text-xl">{item.flag}</span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span>{item.country}</span>
                      <span>{item.sessions}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${item.sessions}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="rounded-lg bg-[#222436] p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Transaction History</h3>
            <button className="px-4 py-2 bg-primary rounded-lg text-white flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-700">
                  <th className="p-4">Product</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Purchased by</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-700">
                    <td className="p-4">{transaction.product}</td>
                    <td className="p-4">{transaction.amount}</td>
                    <td className="p-4">{transaction.date}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        transaction.status === "Processing" 
                          ? "bg-primary/10 text-primary"
                          : transaction.status === "Success"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-red-500/10 text-red-500"
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={transaction.avatar} 
                          alt={transaction.user}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{transaction.user}</p>
                          <p className="text-gray-400 text-sm">{transaction.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <button className="p-2 hover:bg-primary/10 rounded-lg">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;