import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="h-16 border border-slate-300 border-opacity-35 rounded-md w-full flex items-center justify-around">
        <div>
            <h1>Nav Icon</h1>
        </div>
        <div>
           <Link href={'/'}>Home</Link>
        </div>
        <div>
            <UserButton afterSignOutUrl="/" />
        </div>
    </nav>
  );
}

export default Navbar;
