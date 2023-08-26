import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full h-24 bg-orange-300">
      <div className="p-5">
        <div className="flex gap-x-4 justify-center">
          <Link href="/matches">Matches</Link>
          <Link href="/competitions">Competition</Link>
          <Link href="/teams">Teams</Link>
        </div>
      </div>
    </div>
  );
};
