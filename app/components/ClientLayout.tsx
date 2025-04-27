
"use client";
import { usePathname } from 'next/navigation';
import Providers from "./Providers";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthPage = usePathname()?.startsWith('/auth');

  return (
    <Providers>
      {isAuthPage ? (
        children
      ) : (
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-5 ml-64 mt-16">{children}</main>
          </div>
        </div>
      )}
    </Providers>
  );
}
