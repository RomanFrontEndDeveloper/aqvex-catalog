import { useEffect, useMemo, useState } from 'react';
import { fetchProducts } from './api/products';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Pagination } from './components/Pagination/Pagination';
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import { Toolbar } from './components/Toolbar/Toolbar';
import type { Product, SortOption } from './types/product';
import { getPageItems, getTotalPages } from './utils/pagination';
import './App.css';

const PRODUCTS_PER_PAGE = 12;

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedVolumes, setSelectedVolumes] = useState<
		Record<string, string>
	>({});
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState<SortOption>('popular');
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		async function loadProducts() {
			try {
				setLoading(true);
				setError('');

				const data = await fetchProducts();
				setProducts(data);

				const initialVolumes: Record<string, string> = {};
				data.forEach((product) => {
					initialVolumes[product.id] = product.selected_volume_id;
				});

				setSelectedVolumes(initialVolumes);
			} catch (err) {
				setError('Помилка завантаження товарів');
			} finally {
				setLoading(false);
			}
		}

		loadProducts();
	}, []);

	const filteredAndSortedProducts = useMemo(() => {
		const normalizedSearch = search.trim().toLowerCase();

		const filtered = products.filter((product) =>
			product.name.toLowerCase().includes(normalizedSearch),
		);

		const sorted = [...filtered];

		switch (sort) {
			case 'popular':
				sorted.sort((a, b) => b.reviews_count - a.reviews_count);
				break;
			case 'price-asc':
				sorted.sort((a, b) => a.price - b.price);
				break;
			case 'price-desc':
				sorted.sort((a, b) => b.price - a.price);
				break;
			case 'rating-desc':
				sorted.sort((a, b) => b.rating - a.rating);
				break;
			case 'name-asc':
				sorted.sort((a, b) => a.name.localeCompare(b.name));
				break;
			default:
				break;
		}

		return sorted;
	}, [products, search, sort]);

	const totalPages = getTotalPages(
		filteredAndSortedProducts.length,
		PRODUCTS_PER_PAGE,
	);

	const paginatedProducts = useMemo(() => {
		return getPageItems(
			filteredAndSortedProducts,
			currentPage,
			PRODUCTS_PER_PAGE,
		);
	}, [filteredAndSortedProducts, currentPage]);

	useEffect(() => {
		setCurrentPage(1);
	}, [search, sort]);

	useEffect(() => {
		if (currentPage > totalPages && totalPages > 0) {
			setCurrentPage(totalPages);
		}
	}, [currentPage, totalPages]);

	const handleVolumeChange = (productId: string, volumeId: string) => {
		setSelectedVolumes((prev) => ({
			...prev,
			[productId]: volumeId,
		}));
	};

	return (
		<div className='page'>
			<Header />

			<main className='main'>
				<div className='container'>
					<Toolbar
						total={filteredAndSortedProducts.length}
						searchValue={search}
						sortValue={sort}
						onSearchChange={setSearch}
						onSortChange={setSort}
					/>

					{loading && (
						<p className='state-message'>Завантаження...</p>
					)}
					{error && (
						<p className='state-message state-message--error'>
							{error}
						</p>
					)}

					{!loading && !error && (
						<>
							<ProductGrid
								products={paginatedProducts}
								selectedVolumes={selectedVolumes}
								onVolumeChange={handleVolumeChange}
							/>

							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={setCurrentPage}
							/>
						</>
					)}
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default App;
