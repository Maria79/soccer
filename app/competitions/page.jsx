import { TopLigas } from '@/components/competitions/TopLigas';
import {
	getCompetitionById,
	getTopCompetitions,
} from '@/lib/getAllCompetitions';

const navItems = [
	'Popular',
	'Europe',
	'Americas',
	'Asia/Oceania',
	'Africa',
	'International',
];

export default async function CompetitionsPage() {
	const topComp = await getTopCompetitions();
	const ligas = topComp.category.top.ligas;

	return (
		<div className='max-w-6xl mx-auto'>
			<div>
				<div className='flex gap-x-4 py-3 justify-center bg-[#f9f9f9]'>
					{navItems.map((n) => (
						<div key={n}>{n}</div>
					))}
				</div>
			</div>
			<div className='w-3/5 p-2'>
				<div className='border bg-[#f9f9f9] flex justify-center p-1 shadow'>
					<h1 className='text-sm'>TOP LEAGUES AND COMPETITIONS</h1>
				</div>
				<TopLigas ligas={ligas} />
			</div>
		</div>
	);
}
