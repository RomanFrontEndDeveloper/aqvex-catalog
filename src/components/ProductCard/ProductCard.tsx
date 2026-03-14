import type { ChangeEvent } from 'react';
import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './ProductCard.css';

const PRODUCT_IMAGE = '/images/product-placeholder.png';

type ProductCardProps = {
	product: Product;
	selectedVolumeId: string;
	onVolumeChange: (productId: string, volumeId: string) => void;
};

export function ProductCard({
	product,
	selectedVolumeId,
	onVolumeChange,
}: ProductCardProps) {
	const hasManyVolumes = product.volumes.length > 1;

	const handleVolumeChange = (event: ChangeEvent<HTMLSelectElement>) => {
		onVolumeChange(product.id, event.target.value);
	};

	return (
		<article className='product-card'>
			<div className='product-card__image-wrap'>
				<img
					className='product-card__image'
					src={PRODUCT_IMAGE}
					alt={product.name}
				/>
			</div>

			<div className='product-card__prices'>
				<span className='product-card__old-price'>
					{formatPrice(product.old_price)}
				</span>

				<span className='product-card__price'>
					{formatPrice(product.price)}
				</span>

				<span className='product-card__discount'>
					-{product.discount_percent}%
				</span>
			</div>

			<h3 className='product-card__title'>{product.name}</h3>

			<div className='product-card__rating'>
				<span className='product-card__stars'>★★★★★</span>
				<span className='product-card__reviews'>
					{product.reviews_count}
				</span>
			</div>

			<div className='product-card__meta'>
				<span
					className={
						product.in_stock
							? 'product-card__stock product-card__stock--in'
							: 'product-card__stock product-card__stock--out'
					}
				>
					{product.in_stock ? '● В наявності' : '● Немає в наявності'}
				</span>

				<span className='product-card__category'>
					{product.category}
				</span>
			</div>

			<div className='product-card__actions'>
				{hasManyVolumes ? (
					<select
						className='product-card__select'
						value={selectedVolumeId}
						onChange={handleVolumeChange}
					>
						{product.volumes.map((volume) => (
							<option
								key={volume.id}
								value={volume.id}
								disabled={!volume.in_stock}
							>
								{volume.label}
							</option>
						))}
					</select>
				) : (
					<div className='product-card__single-volume'>
						{product.volumes[0]?.label}
					</div>
				)}

				<button
					className='product-card__button'
					type='button'
					disabled={!product.in_stock}
				>
					<img
						className='shopping_cart'
						src='/images/shopping_cart.png'
						alt='Certification 1'
					/>
					В корзину
				</button>
			</div>
		</article>
	);
}
