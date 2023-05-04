import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Trans from 'data/it/stringTranslations';
import { baseFont, titleFont } from 'components/Fonts';

function SidebarFixed({ firstName, lastName, role }) {
	return (
		<>
			<section
				className={`${titleFont.className} text-center md:text-left md:w-1/4 md:fixed md:h-full p-8 flex flex-col justify-between bg-black/5 dark:bg-white/10`}
			>
				<div className="section-top">
					<Image
						src="/avatar.webp"
						alt=""
						width={128}
						height={128}
						className="overflow-hidden rounded-full mx-auto md:m-0"
					/>
					<h1 className="text-xl font-bold mt-8 uppercase leading-4">
						{firstName} {lastName}
					</h1>
					<span className="text-sm tracking-widest opacity-90">
						{role}
					</span>

					<ul
						className={`${baseFont.className} mt-8 text-lg hidden md:flex md:flex-col md:gap-2`}
					>
						<li>
							<Link
								href="#contacts-section"
								className="flex items-center border-b border-black/30 py-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 mr-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
									/>
								</svg>
								{Trans.contacts}
							</Link>
						</li>
						<li>
							<Link
								href="#fiscal-section"
								className="flex items-center border-b border-black/30 py-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 mr-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
									/>
								</svg>
								{Trans.fiscalInformations}
							</Link>
						</li>
						<li>
							<Link
								href="#headquarter-section"
								className="flex items-center border-b border-black/30 py-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 mr-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
									/>
								</svg>
								{Trans.headquarter}
							</Link>
						</li>
						<li>
							<Link
								href="#links"
								className="flex items-center border-b border-black/30 py-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 mr-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
									/>
								</svg>
								{Trans.personalLinks}
							</Link>
						</li>
					</ul>
				</div>

				<div className="section-bottom flex gap-2 justify-center md:justify-start mt-4 md:mt-0">
					<Link
						href="/"
						className="hover:opacity-90 duration-200 ease-in-out transition-all"
					>
						<Icon icon="ic:round-facebook" className="w-6 h-6" />
					</Link>
					<Link
						href="/"
						className="hover:opacity-90 duration-200 ease-in-out transition-all"
					>
						<Icon
							icon="typcn:social-instagram-circular"
							className="w-6 h-6"
						/>
					</Link>
					<Link
						href="/"
						className="hover:opacity-90 duration-200 ease-in-out transition-all"
					>
						<Icon
							icon="ant-design:twitter-circle-filled"
							className="w-6 h-6"
						/>
					</Link>
					<Link
						href="/"
						className="hover:opacity-90 duration-200 ease-in-out transition-all"
					>
						<Icon
							icon="entypo-social:linkedin-with-circle"
							className="w-6 h-6"
						/>
					</Link>
					<Link
						href="/"
						className="hover:opacity-90 duration-200 ease-in-out transition-all"
					>
						<Icon
							icon="entypo-social:youtube-with-circle"
							className="w-6 h-6"
						/>
					</Link>
				</div>
			</section>
		</>
	);
}

export default SidebarFixed;
