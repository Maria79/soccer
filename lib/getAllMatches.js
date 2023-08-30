

export default async function getAllMatches() {
    try {
		const res = await fetch(
            'http://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=quiniela&round=3',
			{ cache: 'no-store' }
		);
		if (!res.ok) {
			throw new Error('Failed to fetch competitions');
		}

        return res.json()
	} catch (error) {
		console.log(error);
	}
}
