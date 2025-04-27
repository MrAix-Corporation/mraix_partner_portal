
"use client";
import PageTemplate from "../../components/PageTemplate";

export default function CustomerPage() {
  return (
    <PageTemplate title="Customer Management">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Customer List</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border">
              <div>
                <h3 className="font-medium">Customer #{i}</h3>
                <p className="text-sm text-gray-500">customer{i}@example.com</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Last Order: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
