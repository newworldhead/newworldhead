import Head from 'next/head'
import Link from 'next/link'
import CompanyColorLabel from './CompanyColorLabel'
export default function CompanyListItem({ company, index }) {
    const { logo, name, factions, slug, recruiting, playstyle, region, language } = company
    return (
        <>
            <Head>
                <meta property="og:title" content="My new title" key="title" />
            </Head>
            <tr className={`bg-primary`}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full"
                                src={logo ? logo.url : "https://via.placeholder.com/150"}
                                alt={name} />
                        </div>
                        <div className="ml-4">
                            <div className="text-lg font-medium text-white cursor-pointer hover:text-blue-400">
                                <Link href={`/companies/${slug}`}>
                                    {name}
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
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`capitalize px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded ${recruiting === 'yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} `}>
                        {recruiting}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white uppercase">
                    {playstyle}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {region}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white capitalize">
                    {language}
                </td>
            </tr >
        </>
    )
}
