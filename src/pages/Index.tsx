import { useState } from "react";
import { Menu, MoreHorizontal, Download } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import UserProfile from "@/components/dashboard/UserProfile";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import StatsCard from "@/components/dashboard/StatsCard";
import SessionsCard from "@/components/dashboard/SessionsCard";
import TransactionsTable from "@/components/dashboard/TransactionsTable";

const data = [
  { month: "Q1", revenue: 250000, target: 200000 },
  { month: "Q2", revenue: 300000, target: 250000 },
  { month: "Q3", revenue: 280000, target: 275000 },
  { month: "Q4", revenue: 348261, target: 300000 },
];

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="p-4 md:ml-64">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden" 
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <UserProfile />
        </div>

        <StatsCard />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg bg-card shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-card-foreground">Revenue Analytics</h3>
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
                    backgroundColor: 'var(--card)',
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

          <SessionsCard />
        </div>

        <TransactionsTable />
      </div>
    </div>
  );
};

export default Index;