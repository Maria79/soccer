import React from 'react';

export default async function getPlantilla(id) {
	try {
		const res = await fetch(
			`https://apiclient.besoccerapps.com/scripts/api/api.php?key=c6196c01e7c1d93932590f42beec9ef8&format=json&req=team_squad&team=${id}&year=2024&category=1&type&id`,
			{ cache: 'no-store' }
		);
		if (!res.ok) {
			console.log(error);
		}
		return res.json();
	} catch (error) {
		console.log(error);
	}
}
