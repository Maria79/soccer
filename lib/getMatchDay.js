export default async function getAllMatchOfTheDay() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=matchsday_watch",
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
export async function getLaLigaMatchday() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=matchsday_watch&competitions=1",
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

export async function getPremierMatchday() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=matchsday_watch&competitions=10",
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

export async function getSeriaAMatchday() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=matchsday_watch&competitions=10",
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
