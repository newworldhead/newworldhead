import Link from 'next/link'
import { useRouter } from 'next/router'
import MainLayout from '@/components/MainLayout'
import CompanyListItem from '@/components/CompanyListItem'
import CompaniesSearch from '@/components/CompaniesSearch'
import { API_URL } from '@/config/index'
import { FaUndo, FaPlus } from 'react-icons/fa'
import qs from 'qs'


export default function CompanyIndex({ companies }) {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/companies`)
    }

    return (
        <MainLayout className="relative">
            <Link href={`/companies/creation`}>
                <button className="absolute p-4 bg-blue-400 text-white rounded-xl shadow-xl top-36 left-32 cursor-pointer hover:shadow outline-none focus:outline-none">
                    <FaPlus />
                </button>
            </Link>
            <div className="container mx-auto">

                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-primary text-white text-4xl uppercase mt-10">All Companies</h1>
                    <div className="flex flex-row mt-10">
                        <CompaniesSearch />
                        <button onClick={handleClick} className="p-3 ml-2 bg-blue-400 text-white rounded outline-none focus:outline-none">
                            <FaUndo />
                        </button>
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
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({ query: { term } }) {

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

    const res = await fetch(`${API_URL}/companies?_sort=featured:DESC,name:ASC&name_ne=${query}`)
    const companies = await res.json()

    return {
        props: {
            companies
        }
    }
}