import { Poppins, Jost } from 'next/font/google';

const baseFont = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
});
const titleFont = Jost({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export { baseFont, titleFont };
