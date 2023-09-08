import PlayingToday from "@/components/matches/today-matches/PlayingToday";
import WeekView from "@/components/matches/week/WeekView";

export default async function MatchesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="py-2">
        <WeekView />
      </div>
      <div className="py-2">
        <PlayingToday />
      </div>
    </div>
  );
}
