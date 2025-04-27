
"use client";
import { useState } from "react";

export default function PeriodSelect() {
  const [period, setPeriod] = useState("2024");
  
  return (
    <select 
      value={period} 
      onChange={(e) => setPeriod(e.target.value)}
      className="px-3 py-1 border rounded-md bg-white"
    >
      <option value="2024">2024</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
    </select>
  );
}
