export default async function getAllTeams() {
  try {
    const res = await fetch(
      "http://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&tz=Europe/Madrid&format=json&req=teams&league=1",
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch teams");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getTeams(idTeam) {
  try {
    const res = await fetch(
      `https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=team_info&id=${idTeam}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch teams");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
