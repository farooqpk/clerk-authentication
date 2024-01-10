import React from "react";

export default function SignInLayout({children}:{children:React.ReactNode}){
    return(
        <main className="flex items-center justify-center h-screen">
            {children}
        </main>
    )
}