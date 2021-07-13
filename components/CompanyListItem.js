import Link from 'next/link'
import CompanyColorLabel from './CompanyColorLabel'
import { FaHeart } from 'react-icons/fa'
export default function CompanyListItem({ company }) {
    const { logo, name, factions, slug, recruiting, playstyle, region, language, likes } = company

    return (
        <>
            <tr className={`flex items-center bg-primary`}>
                <td className="flex-1 px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full"
                                src={logo ? logo.url : "https://via.placeholder.com/150"}
                                alt={name} />
                        </div>
                        <div className="ml-4">
                            <div className="text-lg font-medium text-white cursor-pointer hover:text-blue-400">
                                <Link href={`/companies/${slug}`}>
                                    <div>
                                        {name.slice(0, 10) || name}
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <CompanyColorLabel>
                                    {factions.toLowerCase()}
                                </CompanyColorLabel>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="flex-3 md:flex-1 px-6 py-4 whitespace-nowrap">
                    <span className={`capitalize px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded ${recruiting === 'yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} `}>
                        {recruiting}
                    </span>
                </td>
                <td className="hidden md:flex flex-1 px-6 py-4 whitespace-nowrap text-sm text-white uppercase">
                    {playstyle}
                </td>
                <td className="hidden md:flex flex-1 px-6 py-4 whitespace-nowrap text-sm text-white">
                    {region}
                </td>
                <td className="hidden md:flex flex-1 px-6 py-4 whitespace-nowrap text-sm text-white capitalize">
                    {language}
                </td>
                <td className="hidden md:flex flex-1 px-6 py-4 whitespace-nowrap text-sm text-white">
                    <div className="flex flex-row items-center gap-4">
                        {likes}
                        <div className="text-blue-400">
                            <FaHeart />
                        </div>
                    </div>
                </td>

            </tr >
        </>
    )
}
