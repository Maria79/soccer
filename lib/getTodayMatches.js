export default async function getTodayMatches() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=matchsday&limit=40",
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
