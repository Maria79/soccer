import Matchday from "@/components/main-page/Matchday";
import getLaLigaMatchday, { getPremierMatchday } from "@/lib/getMatchDay";

export default async function Home() {
  const laLiga = await getLaLigaMatchday();
  const premier = await getPremierMatchday();
  // console.log(matchDay);

  return (
    <div className="p-5">
      {/* match of the day */}
      <Matchday laLiga={laLiga} premier={premier} />
    </div>
  );
}
