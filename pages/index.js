import Image from 'next/image';
import { Poppins, Jost } from 'next/font/google';
import { Icon } from '@iconify/react';
import DarkModeToggleButton from 'components/darkModeToggle/darkModeToggle';
import SidebarFixed from 'components/SidebarFixed/SidebarFixed';
import ItemClipboard from 'components/itemClipboard';
import ItemLink from 'components/itemLink';
import { baseFont, titleFont } from 'components/Fonts';
import Trans from 'data/it/stringTranslations';

export async function getStaticProps() {
	return {
		props: {
			SiteName: process.env.SITE_NAME,
			FirstName: process.env.FIRST_NAME,
			LastName: process.env.LAST_NAME,
			Role: process.env.ROLE,
		},
	};
}

export default function Home({ SiteName, FirstName, LastName, Role }) {
	return (
		<main className="md:flex md:justify-between">
			<SidebarFixed firstName={FirstName} lastName={LastName} role={Role} />
			<section className="w-4/6 mr-auto ml-auto md:mr-0 my-8 md:pr-8">
				<div className="text-right hidden inline md:block">
					<DarkModeToggleButton />
				</div>

				<div className="grid md:grid-cols-2 gap-4">
					<section id="contacts-section">
						<header className="flex items-center">
							<span className="bg-black/10 dark:bg-white/10 mr-4 rounded-full p-3">
								<Icon
									icon="ion:mail-outline"
									className="w-5 h-5 opacity-50"
								/>
							</span>
							<h2
								className={titleFont.className + ' text-2xl font-bold'}
							>
								{Trans.contacts}
							</h2>
						</header>
						<div className="my-8">
							<ul
								className={baseFont.className + ' flex flex-col gap-1'}
							>
								<li>
									<ItemClipboard
										label="Email"
										value="info@a2area.it"
										clipboard="info@a2area.it"
									/>
								</li>
								<li>
									<ItemClipboard
										label="PEC"
										value="a.alessio@arubapec.it"
										clipboard="a.alessio@arubapec.it"
									/>
								</li>
								<li>
									<ItemClipboard
										label="Cell."
										value="+39 371 4385203"
										clipboard="00393714385203"
									/>
								</li>
							</ul>
						</div>
					</section>

					<section id="contacts-section">
						<header className="flex items-center">
							<span className="bg-black/10 dark:bg-white/10 mr-4 rounded-full p-3">
								<Icon
									icon="ph:info-light"
									className="w-5 h-5 opacity-50"
								/>
							</span>
							<h2
								className={titleFont.className + ' text-2xl font-bold'}
							>
								{Trans.fiscalInformations}
							</h2>
						</header>
						<div className="my-8">
							<ul
								className={baseFont.className + ' flex flex-col gap-1'}
							>
								<li>
									<ItemClipboard
										html="Via U. de Foro 1<br>15121 Alessandria (AL)"
										clipboard="Via de Foro 1, 15121 Alessandria (AL)"
									/>
								</li>
								<li>
									<ItemClipboard
										label="P.IVA"
										value="IT02476590068"
										clipboard="IT02476590068"
									/>
								</li>
								<li>
									<ItemClipboard
										label="C.F."
										value="LSSLSN86D29A182I"
										clipboard="LSSLSN86D29A182I"
									/>
								</li>
								<li>
									<ItemClipboard
										label="SDI"
										value="M5UXCR1"
										clipboard="M5UXCR1"
									/>
								</li>
							</ul>
						</div>
					</section>

					<section id="contacts-section">
						<header className="flex items-center">
							<span className="bg-black/10 dark:bg-white/10 mr-4 rounded-full p-3">
								<Icon
									icon="system-uicons:home-check"
									className="w-5 h-5 opacity-50"
								/>
							</span>
							<h2
								className={titleFont.className + ' text-2xl font-bold'}
							>
								{Trans.headquarter}
							</h2>
						</header>
						<div className="my-8">
							<ul
								className={baseFont.className + ' flex flex-col gap-1'}
							>
								<li>
									<ItemClipboard
										html="Via Messina 11<br>15121 Alessandria (AL)"
										clipboard="Via Messina 11, 15121 Alessandria (AL)"
									/>
								</li>
							</ul>
						</div>
					</section>

					<section id="contacts-section">
						<header className="flex items-center">
							<span className="bg-black/10 dark:bg-white/10 mr-4 rounded-full p-3">
								<Icon
									icon="ph:link-light"
									className="w-5 h-5 opacity-50"
								/>
							</span>
							<h2
								className={titleFont.className + ' text-2xl font-bold'}
							>
								{Trans.personalLinks}
							</h2>
						</header>
						<div className="my-8">
							<ul
								className={baseFont.className + ' flex flex-col gap-1'}
							>
								<li>
									<ItemLink
										url="https://www.a2area.it"
										data="Portfolio"
									/>
								</li>
								<li>
									<ItemLink
										url="https://www.alessandroalessio.net"
										data="Blog personale"
									/>
								</li>
								<li>
									<ItemLink
										url="https://www.alessandroalessio.dev/cv"
										data="Curriculum Vitae"
									/>
								</li>
							</ul>
						</div>
					</section>
				</div>
			</section>
			<div
				id="copied-clipboard-message"
				className={
					baseFont.className +
					' bg-[#efefef] dark:bg-[#444] fixed bottom-0 left-1/2 inline-block px-6 py-2 font-sans shadow-lg opacity-0 transition-all duration-200 ease-in-out'
				}
			>
				Copiato negli appunti
			</div>
		</main>
	);
}
