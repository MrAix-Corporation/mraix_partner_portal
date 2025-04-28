
"use client";
import { useState } from 'react';

interface ProductFormProps {
  onClose: () => void;
}

export default function ProductForm({ onClose }: ProductFormProps) {
  const [enableBatch, setEnableBatch] = useState(false);
  const [pricingModels, setPricingModels] = useState([{ id: 1 }]);

  const addPricingModel = () => {
    setPricingModels([...pricingModels, { id: pricingModels.length + 1 }]);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Primary Details */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Primary Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Display Name</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
              <option>Select Category</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Of Supply</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
              <option>Select Supply Type</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input type="file" accept="image/jpeg,image/png" className="mt-1 block w-full" />
            <p className="text-xs text-gray-500 mt-1">JPEG or PNG under 1MB</p>
          </div>
        </div>
      </section>

      {/* Accounting Details */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Accounting Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Sales Ledger</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
              <option>Select Ledger</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Purchase Ledger</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
              <option>Select Ledger</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tax Preference</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
              <option>Select Tax</option>
            </select>
          </div>
        </div>
      </section>

      {/* Price Details */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Price Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">MRP</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cost Price</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Selling Price</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Purchase Price</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
          </div>
        </div>
        
        <div className="mt-4">
          <button
            type="button"
            onClick={addPricingModel}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            + Add Pricing Model
          </button>
        </div>
      </section>

      <div className="flex justify-end space-x-4 pt-4 border-t">
        <button
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          Save Product
        </button>
      </div>
    </div>
  );
}
