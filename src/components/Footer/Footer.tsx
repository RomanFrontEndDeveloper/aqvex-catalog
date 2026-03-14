import './Footer.css';

export function Footer() {
	return (
		<footer className='footer'>
			<div className='container footer__inner'>
				<div className='footer__left'>
					<div className='footer__logos'>
						<img
							className='footer__small-logo'
							src='/images/footer-logo-1.png'
							alt='Certification 1'
						/>
						<img
							className='footer__small-logo'
							src='/images/footer-logo-2.png'
							alt='Certification 2'
						/>
					</div>

					<p className='footer__text'>
						AQVEX © 2026 | Все права защищены
					</p>
				</div>

				<div className='footer__payments'>
					<img
						src='/images/mastercard-securecode.png'
						alt='Mastercard SecureCode'
					/>
					<img
						src='/images/verified-visa.png'
						alt='Verified by Visa'
					/>
					<img src='/images/apple-pay.png' alt='Apple Pay' />
					<img src='/images/google-pay.png' alt='Google Pay' />
				</div>
			</div>
		</footer>
	);
}
