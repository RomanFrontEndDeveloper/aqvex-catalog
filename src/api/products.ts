import type { Product, ProductsApiResponse } from '../types/product';

const PRODUCTS_URL =
	'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products';

export async function fetchProducts(): Promise<Product[]> {
	const response = await fetch(PRODUCTS_URL);

	if (!response.ok) {
		throw new Error('Не вдалося отримати товари');
	}

	const data: ProductsApiResponse = await response.json();

	return data.data.products;
}
