import Link from 'next/link'

export default function Company({ company }) {
    const { name, recruiting, slug } = company
    return (
        <li className="border-gray-400 flex flex-row mb-2">
            <Link href={`/companies/${slug}`}>
                <div className="shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">

                        <a className="block relative">
                            <img src="https://via.placeholder.com/150" alt={name} className="mx-auto object-cover rounded-full h-10 w-10" />
                        </a>

                    </div>
                    <div className="flex-1 pl-1">
                        <div className="font-medium dark:text-white">
                            {name}
                        </div>
                    </div>
                    <div className={`text-${recruiting === 'Yes' ? 'green' : 'red'}-600 text-base border rounded-lg border-${recruiting === 'Yes' ? 'green' : 'red'}-600 p-2`}>
                        Recurting {recruiting}
                    </div>
                    <button className="w-10 text-right flex justify-end">
                        <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 text-blue-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </Link>
        </li>
    )
}
