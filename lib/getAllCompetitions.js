export default async function getAllCompetitions() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&tz=Europe/Madrid&req=categories&filter=my_leagues&format=json",
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch competitions");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export async function getTopCompetitions() {
  try {
    const res = await fetch(
      "https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&tz=Europe/Madrid&req=categories&filter=top&format=json",
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch competitions");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getCompetitionById(id) {
  try {
    const res = await fetch(
      `https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&tz=Europe/Madrid&format=json&req=data_competitions&competitions=${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch competitions");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getEuCompetitions() {
  try {
    const res = await fetch(
      `https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&tz=Europe/Madrid&format=json&req=countries_competitions&filter=eu`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch competitions");
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
