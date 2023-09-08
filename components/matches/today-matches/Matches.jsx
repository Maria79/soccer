import getTodayMatches from "@/lib/getTodayMatches";
import { TimeChecked } from "./TimeChecked";
import { Local } from "./Local";
import { Visitor } from "./Visitor";

export const Matches = async ({ m }) => {
  const data = await getTodayMatches();
  const matches = await data.matches;

  const matchesWithSameLeagueId = matches.filter(
    (match) => match.competition_name === m
  );

  return (
    <div className="p-3">
      {matchesWithSameLeagueId.map((m) => (
        <div key={m.id} className="flex justify-center">
          <div className="flex gap-x-2 my-2">
            <div className="w-[50px]">
              {m.live_minute === "" ? null : <div>{m.live_minute}</div>}
            </div>

            <div className="w-[250px] flex justify-end">
              <Local team={m.local} shield={m.local_shield} />
            </div>
            <div>
              <TimeChecked
                hour={m.hour}
                minute={m.minute}
                result={m.result}
                status={m.status}
              />
            </div>
            <div className="w-[250px] flex justify-start">
              <Visitor team={m.visitor} shield={m.visitor_shield} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
