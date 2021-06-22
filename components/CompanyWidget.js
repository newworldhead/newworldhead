import Link from 'next/link'
import { parse } from '@/utils/parser'
import { FaSearch } from 'react-icons/fa'
export default function RecentPostWidget({ company }) {
    const { slug, fraction_image, factions, name, recruiting, description } = company
    return (
        <div className="border-b-2 py-4 capitalize text-base text-white tracking-wider">

            <div className="flex flex-row items-center justify-between p-2">
                <div className="flex flex-row items-center gap-2 text-sm">
                    <div>
                        <Link href={`/companies/${slug}`}>
                            <h3 className="font-primary capitalize text-2xl tracking-wider text-white cursor-pointer hover:text-blue-400">{name}</h3>
                        </Link>
                        <p className={`mt-4 mb-2 ${recruiting === 'yes' ? "text-green-300" : "text-red-400"}`}>Recruiting {recruiting}</p>
                        <div>{parse(description.slice(0, 20))}</div>
                    </div>
                </div>
                {fraction_image ? (
                    <Link href={`/companies/${slug}`}>
                        <img className="w-20 h-22 shadow-xl bg-primary rounded-xl cursor-pointer hover:shadow " src={name} alt={factions} />
                    </Link>
                ) : (
                    <Link href={`/companies/${slug}`}>
                        <div className="p-3 bg-blue-400 shadow-xl rounded-xl cursor-pointer text-white hover:shadow">
                            <FaSearch />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}
