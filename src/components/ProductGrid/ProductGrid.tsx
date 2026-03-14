import type { Product } from '../../types/product';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductGrid.css';

type ProductGridProps = {
	products: Product[];
	selectedVolumes: Record<string, string>;
	onVolumeChange: (productId: string, volumeId: string) => void;
};

export function ProductGrid({
	products,
	selectedVolumes,
	onVolumeChange,
}: ProductGridProps) {
	return (
		<div className='product-grid'>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					selectedVolumeId={
						selectedVolumes[product.id] ??
						product.selected_volume_id
					}
					onVolumeChange={onVolumeChange}
				/>
			))}
		</div>
	);
}
