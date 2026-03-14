import type { Product, ProductsApiResponse } from '../types/product';

const PRODUCTS_URL = '/api/products';

export async function fetchProducts(): Promise<Product[]> {
	const response = await fetch(PRODUCTS_URL);

	if (!response.ok) {
		throw new Error('Не вдалося отримати товари');
	}

	const data: ProductsApiResponse = await response.json();

	return data.data.products;
}
