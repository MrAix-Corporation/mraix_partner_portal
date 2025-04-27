"use client";
import { BsCart4, BsBoxSeam, BsPeople } from "react-icons/bs";

export default function Dashboard() {
  return (
    <div className="">
      <h1 className="text-xl text-primary font-semibold mb-2">Dashboard</h1>
      <p className="text-gray-600 text-xs mb-8">
        Welcome back! Here's an overview of your enterprise data.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Revenue"
          value="$842,314.00"
          change={13.2}
          icon={<BsCart4 className="w-6 h-6 text-blue-500" />}
          note="Projected to exceed target by 8%"
        />
        <StatCard
          title="Open Orders"
          value="246"
          change={8.4}
          icon={<BsBoxSeam className="w-6 h-6 text-green-500" />}
          note="52 orders require immediate attention"
        />
        <StatCard
          title="Inventory Value"
          value="$1,240,000.00"
          change={-2.1}
          icon={<BsBoxSeam className="w-6 h-6 text-yellow-500" />}
          note="Consider restocking 5 low items"
        />
        <StatCard
          title="Active Users"
          value="128"
          change={5.7}
          icon={<BsPeople className="w-6 h-6 text-purple-500" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-purple-100">
              <svg
                className="w-5 h-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold">AI-Enhanced Insights</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Personalized recommendations based on your business data
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-yellow-800">💡</span>
              </div>
              <h3 className="font-medium">Optimize inventory for Q3</h3>
            </div>
            <p className="text-sm text-gray-600">
              Based on seasonal trends, consider increasing stock levels for
              office supplies by 15% for the upcoming back-to-school season.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <span className="p-1 bg-purple-100 rounded">📊</span>
            AI Insights
          </h2>
          <div className="space-y-4">
            <InsightCard
              icon="📦"
              title="Inventory alert"
              description="5 products are below reorder threshold"
            />
            <InsightCard
              icon="📈"
              title="Sales trend detected"
              description="Positive trend in electronics category"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon, note }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-gray-50">{icon}</div>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <div className="text-2xl font-semibold mb-2">{value}</div>
      <div className="flex items-center gap-2">
        <span
          className={`text-sm ${change >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {change >= 0 ? "↑" : "↓"} {Math.abs(change)}% vs last month
        </span>
      </div>
      {note && <p className="text-sm text-gray-500 mt-2">{note}</p>}
    </div>
  );
}

function InsightCard({ icon, title, description }) {
  return (
    <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
        <span>{icon}</span>
      </div>
      <div>
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
