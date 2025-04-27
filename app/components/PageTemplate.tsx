
"use client";
import React from 'react';

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <div className="grid gap-6">
        {children}
      </div>
    </div>
  );
}
