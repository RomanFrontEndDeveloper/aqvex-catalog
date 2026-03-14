import './Header.css';

export function Header() {
	return (
		<header className='header'>
			<div className='container header__inner'>
				<img
					className='header__logo'
					src='/images/logo.svg'
					alt='AQVEX'
				/>
			</div>
		</header>
	);
}
