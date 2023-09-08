import getTodayMatches from "@/lib/getTodayMatches";
import Image from "next/image";
import React from "react";

export const Competitions = async ({ m }) => {
  const data = await getTodayMatches();
  const matches = await data.matches;

  const matchesWithSameLeagueId = matches.filter(
    (match) => match.competition_name === m
  );

  const r = matchesWithSameLeagueId.map((s) => s.cflag);
  const shield = [...new Set(r)];

  return (
    <div className="flex items-center gap-x-2">
      <div>
        <Image src={shield[0]} alt="" width={32} height={32} />
      </div>
      <div>{m}</div>
    </div>
  );
};
