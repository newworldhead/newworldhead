import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { useRouter } from 'next/router'
import MainLayout from '@/components/MainLayout'
import CompanyListItem from '@/components/CompanyListItem'
import CompaniesSearch from '@/components/CompaniesSearch'
import CompanyFilters from '@/components/CompanyFilters'
import Pagination from '@/components/Pagination'
import Breadcrumbs from "@/components/Global/BreadCrumbs"
import { API_URL, PER_PAGE } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import { FaUndo } from 'react-icons/fa'
import qs from 'qs'

export default function CompanyIndex({ companies, page, companiesCount }) {

    const ReactTooltip = dynamic(() => import("react-tooltip"), {
        ssr: false,
    });

    const router = useRouter()
    const handleClick = () => {
        router.push(`/companies`)
    }

    return (
        <MainLayout
            title={`New World Companies and Guild Recruitment | newworldhead.com`}
            description={"The best place for news and everything New World"}
        >
            <ReactTooltip />
            <div className="container mx-auto mb-4 relative">

                <div>
                    <h1 className="font-primary text-center text-white text-4xl uppercase md:mt-10 md:text-left">All Companies</h1>
                </div>

                <div className="container mx-auto flex flex-row items-center bg-secondary my-6 p-4">
                    <Breadcrumbs term={'companies'} />
                </div>

                <div className="flex flex-col items-center justify-between md:flex-row md:items-end">
                    <CompanyFilters />
                    <div className="flex flex-col md:flex-row w-full md:justify-end ">
                        <CompaniesSearch />
                        <div className="flex flex-row">
                            <button
                                data-tip="Reset"
                                onClick={handleClick}
                                className=" hidden md:block p-3 ml-2 bg-blue-400 text-white rounded outline-none focus:outline-none">
                                <FaUndo />
                            </button>
                            <button
                                onClick={handleClick}
                                className="
                                    block
                                    md:hidden
                                    bg-blue-400 
                                    border 
                                    border-blue-400 
                                    px-4 
                                    py-2
                                    mt-2
                                    mx-4
                                    w-full
                                    text-white
                                    outline-none 
                                    tracking-wider
                                    rounded
                                    shadow-xl
                                    hover:shadow
                                    capitalize 
                                    focus:outline-none
                                ">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-left mx-0">
                    <div className="my-2 overflox-x-auto">
                        <div className="py-2 align-middle inline-block w-full">
                            <div className="shadow overflow-hidden border-b border-gray-400">

                                <table className="divide-y divide-gray-400 w-full">
                                    <thead className="bg-primary w-full">
                                        <tr className="flex">
                                            <th scope="col" className="flex-1 px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-widest">Name</th>
                                            <th scope="col" className="flex-3 md:flex-1 px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-widest">Recruiting</th>
                                            <th scope="col" className="hidden flex-1 md:flex px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-widest">Playstyle</th>
                                            <th scope="col" className="hidden flex-1 md:flex px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-widest">Region</th>
                                            <th scope="col" className="hidden flex-1 md:flex px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-widest">Language</th>
                                            <th scope="col" className="hidden flex-1 md:flex px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-widest">Likes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-400">
                                        {companies.map((company) => {
                                            return (
                                                <CompanyListItem
                                                    key={company.id}
                                                    company={company}
                                                />
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {!companiesCount && <h2 className="text-white text-lg text-center capitalize">Sorry Nothing could be found...</h2>}
                <Pagination link={"companies"} page={page} count={companiesCount} />
            </div>
        </MainLayout >
    )
}

export async function getServerSideProps({ req, query: { term, page = 1, factions, language, recruiting, playstyle, region } }) {

    const { token } = parseCookies(req)

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

    const fecthACompanyBasedonUser = await fetch(`${API_URL}/companies/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const fecthedACompanyBasedonUser = await fecthACompanyBasedonUser.json()

    // change total page count based on the type of search
    let count = fetchedCompaniesCount
    const all = '_where%5B0%5D%5Bfactions_contains%5D=&_where%5B1%5D%5Blanguage_contains%5D=&_where%5B2%5D%5Brecruiting_contains%5D=&_where%5B3%5D%5Bplaystyle_contains%5D=&_where%5B4%5D%5Bregion_contains%5D='

    // changes based on fillering type
    if (filter && filter !== all) {
        count = companies.length
    }

    // Trying to get it to sort by most likes, seems a little over the top
    companies.map((company) => {
        company.likes = company.likes.filter((item) => {
            return item.liked === true

        })
    })
    companies.map((company) => {
        company.likes = company.likes.length
    })

    companies.sort((a, b) => b.likes - a.likes)
    
    return {
        props: {
            companies,
            page: +page,
            companiesCount: count,
            userHasCompany: fecthedACompanyBasedonUser
        }
    }
}