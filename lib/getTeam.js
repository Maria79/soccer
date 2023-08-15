export default async function getTeam(teamId) {
	try {
		const res = await fetch(
			`https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&tz=Europe/Madrid&format=json&req=team&id=${teamId}`,
			{ cache: 'no-store' }
		);
		if (!res.ok) {
			throw new Error('Failed to fetch the selected team');
		}
		return res.json();
	} catch (error) {
		console.log(error);
	}
}
