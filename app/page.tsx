import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-7 p-24">
      <h1 className="text-2xl">Home Page</h1>
     <Link href={'/protected'}>
     <button className="border border-slate-100 p-3 rounded-md hover:scale-95">
        Go To Protected Page
      </button>
     </Link>
    </main>
  );
}
