"use client";
import { usePathname } from "next/navigation";
import Providers from "./Providers";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthPage = usePathname()?.startsWith("/auth");

  return (
    <Providers>
      {isAuthPage ? (
        children
      ) : (
        <div className="relative h-full">
          <div className="fixed h-[10vh] top-0 w-full">
            <Header />
          </div>
          <div className="flex mt-[10vh]">
            <div className="fixed left-0 w-[20%] bg-white ">
              <Sidebar />
            </div>
            <main className="px-5 ml-[20%]">{children}</main>
          </div>
        </div>
      )}
    </Providers>
  );
}
