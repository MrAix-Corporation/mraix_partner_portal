
"use client";
import { useState } from 'react';
import PageTemplate from '../components/PageTemplate';
import TabView from '../components/TabView';
import ProductForm from '../components/ProductForm';

export default function ItemManagement() {
  const [activeTab, setActiveTab] = useState('all');
  const [showForm, setShowForm] = useState(false);

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'products', label: 'Products' },
    { id: 'addons', label: 'Addons' },
    { id: 'charges', label: 'Charges' },
    { id: 'units', label: 'Units/Measurement' },
  ];

  return (
    <PageTemplate title="Item Management">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 flex justify-between items-center">
          <TabView tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary px-4 py-2 text-white rounded-lg hover:bg-primary-dark"
          >
            Add New Item
          </button>
        </div>
        
        {showForm ? (
          <ProductForm onClose={() => setShowForm(false)} />
        ) : (
          <div className="p-4">
            {/* Table content will be added here */}
            <div className="min-h-[400px] flex items-center justify-center text-gray-500">
              Select a tab to view items
            </div>
          </div>
        )}
      </div>
    </PageTemplate>
  );
}
