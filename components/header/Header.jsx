import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="w-full h-24 bg-orange-300">
      <div className="p-5">
        <div className="max-w-2xl mx-auto flex gap-x-4 justify-center items-center">
          <Link href="/" className="flex-start">
            <AiOutlineHome size={28} />
          </Link>
          <Link href="/matches">Matches</Link>
          <Link href="/competitions">Competition</Link>
          <Link href="/teams">Teams</Link>
        </div>
      </div>
    </div>
  );
};
