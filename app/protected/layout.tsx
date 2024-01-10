import Navbar from "@/components/navbar";
import React from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <main className="flex flex-col justify-between items-center min-h-screen w-full">
     <Navbar />
      {children}
     </main>
    </>
  );
}
