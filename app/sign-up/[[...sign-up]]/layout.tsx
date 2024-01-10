import React from "react";

export default function SignUpLayout({children}:{children:React.ReactNode}){
    return(
        <main className="flex items-center justify-center h-screen">
            {children}
        </main>
    )
}