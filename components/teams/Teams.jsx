"use client";

import { useRouter } from "next/navigation";

export const Teams = ({ teams }) => {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto">
      {teams.map((t) => (
        <div key={t.id} className="flex flex-row gap-1">
          <p className="w-[80px] text-right pr-2">{t.id}</p>

          <p
            className="w-[200px] cursor-pointer"
            onClick={() => router.push(`/teams/${t.basealias}`)}
          >
            {t.nameShowTeam}
          </p>
        </div>
      ))}
    </div>
  );
};
