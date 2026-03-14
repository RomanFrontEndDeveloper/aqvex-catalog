export default async function handler(req, res) {
	const response = await fetch(
		'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products',
	);

	const data = await response.json();

	res.status(200).json(data);
}
