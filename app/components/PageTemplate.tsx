"use client";
import React from 'react';

//Added date formatting utility function
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
  const currentDate = formatDate(new Date()); //Example usage;  replace 'new Date()' with the actual date variable.

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <div className="grid gap-6">
        {/* Example of where the date might have been used */}
        <p>Today's date is: {currentDate}</p>
        {children}
      </div>
    </div>
  );
}