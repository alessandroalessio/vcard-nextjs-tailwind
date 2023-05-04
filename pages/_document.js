import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang={process.env.LANGUAGE}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
