import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Graphs</h1>
      <Link href="/chartJS">Chart.js</Link>
    </main>
  );
}
