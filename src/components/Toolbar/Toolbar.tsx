import type { ChangeEvent } from 'react';
import type { SortOption } from '../../types/product';
import './Toolbar.css';

type ToolbarProps = {
	total: number;
	searchValue: string;
	sortValue: SortOption;
	onSearchChange: (value: string) => void;
	onSortChange: (value: SortOption) => void;
};

export function Toolbar({
	total,
	searchValue,
	sortValue,
	onSearchChange,
	onSortChange,
}: ToolbarProps) {
	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		onSearchChange(event.target.value);
	};

	const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
		onSortChange(event.target.value as SortOption);
	};

	return (
		<section className='toolbar'>
			<div className='wrap__input'>
				<div className='toolbar__search__wrapper'>
					<div className='toolbar__search'>
						<img
							className='toolbar__search-icon'
							src='/images/search.png'
							alt='search'
						/>

						<input
							type='text'
							placeholder='Пошук'
							value={searchValue}
							onChange={handleSearch}
						/>
					</div>
				</div>

				<div className='container toolbar__inner'>
					<p className='toolbar__count'>{total} товарів</p>

					<div className='toolbar__controls'>
						<div className='toolbar__sort-wrapper'>
							<img
								className='toolbar__sort-icon'
								src='/images/frame.png'
								alt='Certification 1'
							/>

							<select
								className='toolbar__sort'
								value={sortValue}
								onChange={handleSort}
							>
								<option value='popular'>
									- По популярности
								</option>
								<option value='price-asc'>
									- Ціна: від дешевих
								</option>
								<option value='price-desc'>
									- Ціна: від дорогих
								</option>
								<option value='rating-desc'>
									- За рейтингом
								</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
