import Link from 'next/link'
import { useRouter } from 'next/router'
import MainLayout from '@/components/MainLayout'
import CompanyListItem from '@/components/CompanyListItem'
import CompaniesSearch from '@/components/CompaniesSearch'
import CompanyFilters from '@/components/CompanyFilters'
import Pagination from '@/components/Pagination'
import { API_URL, PER_PAGE } from '@/config/index'
import { FaUndo, FaPlus } from 'react-icons/fa'
import qs from 'qs'
import { NextSeo } from 'next-seo'

export default function CompanyIndex({ companies, page, companiesCount }) {


    const router = useRouter()

    const handleClick = () => {
        router.push(`/companies`)
    }

    return (

        <>
            <NextSeo
                title="New World News, Updates & Guides | newworldhead.com"
                description="The best place for news and everything New World"
            />

            <MainLayout className="relative">

                <Link href={`/companies/creation`}>
                    <button className="absolute p-4 bg-blue-400 text-white rounded-xl shadow-xl top-80 left-28 cursor-pointer hover:shadow outline-none focus:outline-none">
                        <FaPlus />
                    </button>
                </Link>

                <div className="container mx-auto mb-4">
                    <div>
                        <h1 className="font-primary text-white text-4xl uppercase mt-16 mb-10">All Companies</h1>
                    </div>

                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <CompanyFilters />
                        <div className="flex flex-row items-end mt-4 ">
                            <CompaniesSearch />
                            <div className="relative">
                                <button
                                    onClick={handleClick}
                                    className="p-3 ml-2 bg-blue-400 text-white rounded outline-none focus:outline-none">
                                    <FaUndo />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col text-left w-full">
                        <div className="my-2 overflox-x-auto">
                            <div className="py-2 align-middle inline-block w-full">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-200">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">Name</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">Recruiting</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">Playstyle</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">Region</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">Language</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {companies.map((company, index) =>
                                                <CompanyListItem key={company.id} index={index} company={company} />
                                            )}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Pagination link={"companies"} page={page} count={companiesCount} />
                </div>
            </MainLayout>
        </>
    )
}

export async function getServerSideProps({ query: { term, page = 1, factions, language, recruiting, playstyle, region } }) {

    // calculate start page
    const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

    const query = qs.stringify({
        _where: {
            _or: [
                { name_contains: term },
                { description_contains: term },
                { factions_contains: term },
                { language_contains: term },
                { recruiting_contains: term },
                { playstyle_contains: term },
                { region_contains: term },
            ]
        }
    })

    const filter = qs.stringify({
        _where: [
            { factions_contains: factions },
            { language_contains: language },
            { recruiting_contains: recruiting },
            { playstyle_contains: playstyle },
            { region_contains: region }
        ]
    })

    // fetch count
    const fetchCompaniesCount = await fetch(`${API_URL}/companies/count`)
    const fetchedCompaniesCount = await fetchCompaniesCount.json()

    // fetch companies
    const fetchCompanies = await fetch(`${API_URL}/companies?_sort=featured:DESC&name_ne=&${query}&${filter}&_limit=${PER_PAGE}&_start=${start}`)
    const companies = await fetchCompanies.json()

    // change total page count based on the type of search
    let count = fetchedCompaniesCount
    const all = '_where%5B0%5D%5Bfactions_contains%5D=&_where%5B1%5D%5Blanguage_contains%5D=&_where%5B2%5D%5Brecruiting_contains%5D=&_where%5B3%5D%5Bplaystyle_contains%5D=&_where%5B4%5D%5Bregion_contains%5D='

    if (filter && filter !== all) {
        count = companies.length
    }

    return {
        props: {
            companies,
            page: +page,
            companiesCount: count,
        }
    }
}