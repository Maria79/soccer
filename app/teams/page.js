import { Teams } from "@/components/teams/Teams";
import getAllTeams from "@/lib/getAllTeams";

export default async function TeamsPage() {
  const teamsData = await getAllTeams();
  const teams = teamsData.team;

  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <h1>Teams Page</h1>
      </div>
      <Teams teams={teams} />
    </div>
  );
}
