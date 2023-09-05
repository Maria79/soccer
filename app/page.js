import getAllMatchOfTheDay from "@/lib/getMatchDay";
// import getLaLigaMatchday, { getPremierMatchday } from "@/lib/getMatchDay";

export default async function Home() {
  const allMatches = await getAllMatchOfTheDay();
  const matches = allMatches.matches;
  const time = matches.map((t) => t.hour + ":" + t.minute);
  const competitions = matches.map((c) => c.competition_name);

  const uniqueCompetitions = [...new Set(competitions)];

  return (
    <div className="p-5">
      <div className="flex gap-x-2">
        <div>
          {uniqueCompetitions.map((c, index) => (
            <div key={index}>{c}</div>
          ))}
        </div>
        <div>
          {matches.map((m) => (
            <div key={m.id}>
              <div>{m.id}</div>
            </div>
          ))}
        </div>
        <div>
          {matches.map((m) => (
            <div key={m.id}>
              <div>
                {m.hour}:{m.minute}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
