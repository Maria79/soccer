import getTodayMatches from "@/lib/getTodayMatches";
import { Matches } from "./Matches";
import Image from "next/image";
import { Competitions } from "./Competitions";

export default async function PlayingToday() {
  const data = await getTodayMatches();
  const matches = await data.matches;

  const sameShield = matches
    .map((c) => c.cflag)
    .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

  const sameCompetition = matches
    .map((c) => c.competition_name)
    .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

  return (
    <div>
      <div>Competitions:</div>

      <div className="flex flex-col mb-6 ">
        {sameCompetition.map((m, index) => (
          <div key={index}>
            <div className="bg-gray-400 p-6 text-white">
              <Competitions m={m} />
            </div>

            <div className="pl-3 mb-3">
              <Matches m={m} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <Image src={l} alt="logo" width={28} height={28} /> */
}
