export function getPageItems<T>(
	items: T[],
	currentPage: number,
	perPage: number,
): T[] {
	const startIndex = (currentPage - 1) * perPage;
	const endIndex = startIndex + perPage;

	return items.slice(startIndex, endIndex);
}

export function getTotalPages(itemsCount: number, perPage: number): number {
	return Math.ceil(itemsCount / perPage);
}
