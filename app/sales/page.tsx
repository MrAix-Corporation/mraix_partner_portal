
"use client";
import PageTemplate from "../components/PageTemplate";
import { BsCart4, BsGraphUp, BsPersonCheck } from "react-icons/bs";

export default function Sales() {
  return (
    <PageTemplate title="Sales Management">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Today's Sales"
          value="$12,450"
          change={8.2}
          icon={<BsCart4 className="w-6 h-6 text-purple-500"/>}
        />
        <StatCard 
          title="Monthly Target"
          value="$158,000"
          change={12.5}
          icon={<BsGraphUp className="w-6 h-6 text-green-500"/>}
        />
        <StatCard 
          title="Active Customers"
          value="1,245"
          change={3.8}
          icon={<BsPersonCheck className="w-6 h-6 text-blue-500"/>}
        />
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">Order #{Math.floor(Math.random() * 10000)}</h3>
                <p className="text-sm text-gray-500">Customer {i}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${Math.floor(Math.random() * 1000)}</p>
                <p className="text-sm text-gray-500">Today</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}

function StatCard({ title, value, change, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-gray-50">{icon}</div>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <div className="text-2xl font-semibold mb-2">{value}</div>
      <div className="flex items-center gap-2">
        <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% vs last month
        </span>
      </div>
    </div>
  );
}
