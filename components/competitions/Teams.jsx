import { getCompetitionById } from '@/lib/getAllCompetitions';
import React from 'react';

export const Teams = async ({ teamId }) => {
	const t = await getCompetitionById(teamId);
	const tp = t[teamId].phases[0].data[0].total_teams;
	console.log(tp);

	return <div>{tp}teams</div>;
};
