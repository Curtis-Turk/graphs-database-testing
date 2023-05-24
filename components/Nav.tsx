import Link from "next/link";

export default function Nav() {
  return (
    <div
      id="nav"
      className="flex items-center text-center justify-center space-x-6 pt-10"
    >
      <Link href="/">Home</Link>
      <Link href="/chartJS">Chart.js</Link>
      <Link href="/recharts">Recharts</Link>
    </div>
  );
}
