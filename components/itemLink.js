import Link from 'next/link';
import { useEffect, useState } from 'react';

function ItemLink(props) {
	return (
		<>
			<Link
				href={props.url}
				className="group hover:bg-black/10 dark:hover:bg-white/10 duration-200 ease-in-out transition-all p-2 px-3 rounded-lg flex justify-between cursor-pointer"
			>
				<span dangerouslySetInnerHTML={{ __html: props.data }}></span>
				<span className="opacity-0 group-hover:opacity-50 duration-200 ease-in-out transition-all">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
				</span>
			</Link>
		</>
	);
}

export default ItemLink;
