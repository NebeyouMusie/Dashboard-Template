import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar } from "recharts";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const data = [
  { month: "Jan", revenue: 250000, target: 200000 },
  { month: "Feb", revenue: 300000, target: 250000 },
  { month: "Mar", revenue: 280000, target: 275000 },
  { month: "Apr", revenue: 348261, target: 300000 },
];

const sessionData = [
  { country: "United States", sessions: 85 },
  { country: "Japan", sessions: 70 },
  { country: "Indonesia", sessions: 45 },
  { country: "South Korea", sessions: 38 },
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
  },
  // ... add more transactions
];

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-card">
          <div className="flex items-center mb-5">
            <span className="text-2xl font-semibold text-white">Dashboard</span>
          </div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-primary/10">
                Overview
              </a>
            </li>
            {/* Add more menu items */}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className="p-4 md:ml-64">
        <div className="flex justify-between items-center mb-6">
          <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-6 w-6" />
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-primary/10"
          >
            {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-card animate-fade-in">
            <h3 className="text-muted text-sm mb-1">Total Revenue</h3>
            <p className="text-2xl font-semibold">$348,261</p>
            <span className="text-green-500 text-sm">+2.45%</span>
          </div>
          {/* Add more stat cards */}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-4">Revenue Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" />
                <Line type="monotone" dataKey="target" stroke="#4ADE80" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-4">Sessions by Country</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sessionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="country" type="category" />
                <Tooltip />
                <Bar dataKey="sessions" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="rounded-lg bg-card p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Transaction History</h3>
            <button className="px-4 py-2 bg-primary rounded-lg text-white">Download</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-muted">
                  <th className="p-4">Product</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">User</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-t border-border">
                    <td className="p-4">{transaction.product}</td>
                    <td className="p-4">{transaction.amount}</td>
                    <td className="p-4">{transaction.date}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {transaction.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div>
                          <p className="font-medium">{transaction.user}</p>
                          <p className="text-muted text-sm">{transaction.email}</p>
                        </div>
                      </div>
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