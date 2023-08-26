import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex gap-x-4 justify-center">
        <Link href="/matches">Matches</Link>
        <Link href="competitions">Competitions</Link>
        <Link href="teams">Teams</Link>
      </div>
    </div>
  );
}
