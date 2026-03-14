import './Pagination.css';

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	if (totalPages <= 1) {
		return null;
	}

	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<div className='pagination'>
			<button
				type='button'
				className='pagination__arrow'
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				←
			</button>

			{pages.map((page) => (
				<button
					key={page}
					type='button'
					className={
						page === currentPage
							? 'pagination__page pagination__page--active'
							: 'pagination__page'
					}
					onClick={() => onPageChange(page)}
				>
					{page}
				</button>
			))}

			<button
				type='button'
				className='pagination__arrow'
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				→
			</button>
		</div>
	);
}
