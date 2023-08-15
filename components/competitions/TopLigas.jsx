import Image from 'next/image';
import React from 'react';
import { Teams } from './Teams';

export const TopLigas = ({ ligas }) => {
	const currentDate = new Date();
	const ligaId = ligas.map((l) => l.id);
	const ligaStartDate = ligas.filter(
		(l) => new Date(l.start_date) < currentDate
	);

	const ligaRound = ligas.filter((l) => l.current_round < 20);

	return (
		<div className='grid grid-cols-2'>
			{ligaRound.map((l) => (
				<div key={l.id}>
					<div className='flex border p-2 cursor-pointer shadow'>
						<Image src={l.logo} alt={l.name} width={48} height={48} />
						<div className='px-2 py-0'>
							<div className='flex gap-x-2'>
								<Image
									className='rounded-full scale-75'
									src={l.flag}
									alt={l.name}
									width={28}
									height={28}
								/>
								<p className='text-sm'>{l.shortName}</p>
							</div>
							<div className='text-sm'>
								{new Date(l.start_date) < currentDate ? (
									<span className='text-sky-600'>In play</span>
								) : (
									<span className='text-sky-600'>Not started yet</span>
								)}
								<span>(MD{l.current_round})</span>
								<Teams teamId={l.id} />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
