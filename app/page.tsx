"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
  );
}