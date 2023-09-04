import { Apuesta } from "@/components/matches/Apuesta";
import { DiaPartido } from "@/components/matches/DiaPartido";
import Revenue from "@/components/matches/Revenue";
import getAllMatches from "@/lib/getAllMatches";

export default async function MatchesPage() {
  const partidosData = await getAllMatches();
  const partidos = partidosData.quiniela.lines;
  const ganancias = partidosData.quiniela.revenue;
  const quiniela = partidosData.quiniela;

  const date = new Date(quiniela.date);
  const day = date.getDate();
  const month = date.getMonth() + 1; // JavaScript months are 0-based
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  // console.log(formattedDate);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="my-7">
        <div className="text-2xl">
          Apuestas de los partidos quiniela en España
        </div>
      </div>
      <small>{formattedDate}</small>
      <Revenue ganancias={ganancias} quiniela={quiniela} />
      <div className="max-w-lg mx-auto">
        {partidos.map((p) => (
          <div key={p.id}>
            <div className="grid grid-cols-[140px_150px_35px_80px]">
              <p className="pl-1 ">{p.team1_name}</p>
              <p className="pl-1">{p.team2_name}</p>
              <DiaPartido shedule={p.shedule} />
              <Apuesta result={p.result} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
